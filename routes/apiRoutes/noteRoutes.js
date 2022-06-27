const router = require('express').Router();
const fs = require('fs');
const path = require('path');
let data = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid')


router.get('/notes', (req, res) => {
    res.json(data);
    console.log({ data });
});

router.post('/notes', (req, res) => {
    const newNote = { ...req.body, id: uuidv4() }
    console.log(req.body);
    data.unshift(newNote)
    fs.writeFile(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(data),
        function (err) {
            if (err) {
                res.status(404).json({ error: err });
            }
            res.json(data);
        }
    );
});

module.exports = router;