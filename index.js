const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const room = require("./routes/room")
const customer = require("./routes/customer")
const cors = require("cors")
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.get("/", (req, res) => {
    res.send("Hello")
})


app.use(cors())
app.use(express.json())
app.use("/room", room)
app.use("/customer",customer)
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Mongoose is Connnected")
        app.listen(PORT, () => console.log("Server is connected on the Port", PORT))
    })
    .catch((err) => console.log(err))








