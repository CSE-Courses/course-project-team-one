const router = require('express').Router();
let Noti = require('../models/noti.model');

router.route('/').get((req, res) => {
    Noti.find()
        .then(notis => res.json(notis))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const classes = req.body.classes;
    const deadline = req.body.deadline;

    const newNoti = new Noti({classes,deadline});

    newNoti.save()
        .then(()=> res.json('noti added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;