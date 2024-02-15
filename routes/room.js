const express = require("express")
const creating_room_Schema = require("../model/creating-room")
const booking_room = require("../model/booking-room")
const router = express.Router()



router.get("/getting-booked-room", async (req, res) => {
    try {
        const getting_room = await creating_room_Schema.find()
        res.send(getting_room)
    }
    catch (error) {
        res.status(400).json(error)
    }
})


router.post("/creating-room", async (req, res) => {
    try {
        const newRoom = new creating_room_Schema(req.body)
        await newRoom.save()
        res.send("Created Room Successfully")
    }
    catch (err) {
        res.send(err)
    }

})

router.post("/booking-room", async (req, res) => {
    try {
        const newCustomer = new booking_room(req.body)
        await newCustomer.save()
        const booking = await creating_room_Schema.findOneAndUpdate({ id: req.body.room_id }, { booked: req.body })
        res.send(booking)
    }
    catch (err) {
        res.send(err)
    }


    

})



module.exports = router