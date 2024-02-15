const express = require("express")
const booking_room = require("../model/booking-room")
const router = express.Router()

router.get("/booked-customers", async (req, res) => {
    try{
        const bookedRoom = await booking_room.find()
        res.send(bookedRoom)
    }
    catch(error){
        res.send(error)
    }
    
})




module.exports = router