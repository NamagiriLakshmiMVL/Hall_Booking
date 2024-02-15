const mongoose = require("mongoose")

const booking_room_schema = mongoose.Schema(
    {
        customer_name:{type:String,required:true},
        date:{type:String,required:true},
        start_time:{type:String,required:true},
        end_time:{type:String,required:true},
        room_id:{type:Number,required:true}

    }
)

const booking_room = mongoose.model("booking",booking_room_schema)
module.exports = booking_room


