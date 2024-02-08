var jwt = require('jsonwebtoken');
require('dotenv').config()
const authenticateToken = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send("Authentication failed");
    }
    try {
        const tok_data = jwt.verify(token, process.env.JWT_KEY);
        req.data = tok_data;
        next();
    }
    catch (err) {
        return res.status(401).send("Authentication failed");
    }
}
module.exports = authenticateToken;