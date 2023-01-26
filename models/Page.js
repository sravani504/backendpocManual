import mongoose from "mongoose"
const PageSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }

})




 export default mongoose.model("Page", PageSchema)