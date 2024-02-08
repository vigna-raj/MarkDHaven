const express = require('express')
const router = express.Router()

// Route 1 Endpoint for adding note using PUT

router.get('/addnote', (req, res) => {
    res.send('Hello World!')
})
// Route 1 Endpoint for editing note using PUT

router.put('/editnote', (req, res) => {
    res.send('Hello World!')
})
// Route 1 Endpoint for deleting note using DELETE

router.delete('/deletenote', (req, res) => {
    res.send('Hello World!')
})
module.exports = router