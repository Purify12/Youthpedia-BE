const express = require("express")

// creates a new router instance.
const router = express.Router()

router.get("/", (req, res) => {
    const ready = {
        status: "server is ready"
    }
    res.status(200).send(ready)
    res.send({ welcome: "Welcome to youthPedia API"})   
})

module.exports = router