const router = require("express").Router();
const db = require("../models");
const mongoose = require("mongoose");

router.get("/books", (req, res) => {
  db.Book.find({})
    .then(data => res.json(data))
    .catch(err => res.status(422).end());
});

router.post("/book-post", (req, res) => {
    console.log(req.body);
    db.Book.create(req.body)
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
})



module.exports = router;