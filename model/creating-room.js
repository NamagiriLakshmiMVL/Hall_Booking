const mongoose = require("mongoose")

const create_room_Schema = mongoose.Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    seats:{type:Number,required:true},
    aminities:{type:Array,required:true},
    price:{type:Number,required:true},
    booked:{type:Object},
    roomNumber:{type:Number,required:true}
})

const creating_room_Schema = mongoose.model("creating",create_room_Schema)
module.exports = creating_room_Schema