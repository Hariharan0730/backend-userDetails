const express = require("express");
const userController = require("../controllers/userController")
require("dotenv").config()
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.find({email})
        .then((data) => {
            if (data[0].password === password) {
               res.json({"login":"true"})
            }
        })
        .catch((err) => res.send(err))
})
router.post("/signUp", (req, res) => {
    console.log(req.body)
    const { name, age, email, password } = req.body;
    userController.createUser(name, age, email, password)
        .then(() => console.log("Signed up"))
        .catch((err) => res.send(err))
})
router.get('/getUsers', (req, res) => {

    userController.getUser()
        .then((data) => res.json(data))
        .catch((err) => res.send(err))

})

router.put('/editUser/:id', (req, res) => {
    const id = req.params.id
    const { email } = req.body
    const { age } = req.body
    console.log(id)
    userController.putUser(id, email, age)
        .then(user => res.json(user))
        .catch(err => res.send(err))
})
router.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id
    userController.deleteUser(id)
        .then(result => res.send(result))
})

module.exports = router;