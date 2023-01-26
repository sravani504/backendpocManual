import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    pages:[
        {
            name:{
                type: String, required: true
            },
            description:{
                type: String, required: true
            }
        }
    ]   
})
 export default mongoose.model("posts", postSchema)