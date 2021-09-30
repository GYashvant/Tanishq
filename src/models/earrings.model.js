const mongoose = require("mongoose")



const earringSchema = new mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, required:true},
    price:{type:Number, required:true}
})

const Img = mongoose.model("image", imgSchema);

app.post("/details", async(req, res)=>{
    const detalis = await Img.create(req.body)

    return res.status(201).send({detalis})
})

app.get("/details", async(req, res)=>{
    const detalis = await Img.find()

    res.render("all_users",{
        detalis
    })
})