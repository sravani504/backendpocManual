import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    status: { type: Number, default: 1 },
    name: { type: String, required: true },
    description: { type: String, required: true },
    pages: [
        {
            status: {
                type: Number, default: 1

            },
            name: {
                type: String, required: true
            },
            description: {
                type: String, required: true
            }
        }
    ]
})
export default mongoose.model("posts", postSchema)