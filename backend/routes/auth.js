const express = require('express')
const router = express.Router()
const dotenv = require('dotenv').config()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var authenticateToken = require("../middleware/authenticateToken")

// Route 1 Endpoint for register using POST (login not required)

router.post('/api/register', [
    body('name', "Name should be at least 5 chars").isLength({ min: 5 }),
    body('email', "Enter ").isEmail(),
    body('password', "Name should be at least 5 chars").isLength({ min: 5 }),
],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).send({ errors: "Enter valid Email" });
            }
            const chk_dup = await User.findOne({ email: req.body.email });
            if (chk_dup) {
                return res.status(400).send({ errors: "User already exists" });
            }
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);
            const user = await User.create(
                {
                    name: req.body.name,
                    password: hash,
                    email: req.body.email,
                }
            );
            var token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
            res.json({ token: token })
        }
        catch (er) {
            res.status(500).send({ errors: er.message })
        }


    })


// Route 2 Endpoint for login using POST(login not required)

router.post('/api/login', [
    body('email', "Enter ").isEmail(),
    body('password', "Name should be at least 5 chars").isLength({ min: 5 }),
],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).send({ errors: "Check your login credentials" });
            }
            const chk_user = await User.findOne({ email: req.body.email });
            if (!chk_user) {
                return res.status(400).send({ errors: "Check your login credentials" });
            }
            const valid_pass = await bcrypt.compare(req.body.password, chk_user.password);
            if (!valid_pass) {
                return res.status(400).send({ errors: "Check your login credentials" });
            }
            var token = jwt.sign({ id: chk_user._id }, process.env.JWT_KEY);
            res.json({ token: token })
        }
        catch (er) {
            res.status(500).send({ errors: "Internal server error" })
        }

    })


// Route 3 Endpoint for fetching user data POST(Login required)

router.post('/api/fetchdata', authenticateToken, async (req, res) => {
    try {
        const user_id = req.data.id;
        const user = await User.findOne({ _id: user_id }).select("-password");
        res.send(user)
    } catch (error) {

        res.status(500).send({ errors: "Internal Server Error" });
    }
})
module.exports = router