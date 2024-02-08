const express = require('express')
const router = express.Router()
var authenticateToken = require("../middleware/authenticateToken")
const Note = require("../models/Note")
const { body, validationResult } = require('express-validator');


// Route 1 Endpoint for adding note using POST(login required)

router.post('/addnote', authenticateToken, [
    body('title', "Title must atlest have 2 characters").isLength({ min: 2 }),
    body('description', "Description must atlest have 5 characters").isLength({ min: 5 }),
    body('note', "Note must atlest have 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
        }
        const user_id = req.data.id;
        const notes = await Note.create(
            {
                owner_id: user_id,
                title: req.body.title,
                description: req.body.description,
                note: req.body.note,
            }
        )
        res.status(200).send("Data added sucessfully!");
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Internal server error")
    }
})


// Route 2 Endpoint for editing note using PUT (login required)

router.put('/editnote', authenticateToken, async (req, res) => {
    try {
        const user_id = req.data.id;
        const note_id = req.body.id;
        var cur_data = await Note.findOne({ _id: note_id });
        if (!cur_data) {
            return res.status(404).send("Note not found");
        }
        if (cur_data.owner_id.toString() !== user_id) {
            return res.status(401).send("Not allowed");
        }
        var new_note = {};
        if (req.body.title) {
            new_note.title = req.body.title
        }
        if (req.body.description) {
            new_note.description = req.body.description
        }
        if (req.body.note) {
            new_note.note = req.body.note
        }
        cur_data = await Note.findByIdAndUpdate(note_id, { $set: new_note }, { new: true })
        res.json({ cur_data });

    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Internal server error")
    }
})


// Route 3 Endpoint for deleting note using DELETE (login required)

router.delete('/deletenote', authenticateToken, async (req, res) => {
    try {
        const user_id = req.data.id;
        const note_id = req.body.id;
        var cur_data = await Note.findOne({ _id: note_id });
        if (!cur_data) {
            return res.status(404).send("Note not found");
        }
        if (cur_data.owner_id.toString() !== user_id) {
            return res.status(401).send("Not allowed");
        }
        cur_data = await Note.findByIdAndDelete(note_id)
        res.json({ "Success": "Note has been deleted", note: cur_data });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Internal server error")
    }
})


// Route 4 Endpoint for fetch note using POST (login required)

router.post('/fetchnote', authenticateToken, async (req, res) => {
    try {
        const user_id = req.data.id;
        const data = await Note.find({ owner_id: user_id });
        res.status(200).json(data);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Internal server error")
    }
})
module.exports = router

