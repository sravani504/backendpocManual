
import post from "../models/Post.js";
import mongoose, { mongo } from "mongoose";

export const chapterusers = async (req, res) => {
  const { name, data } = req.body;
  console.log(req.body);
  try {
    const existingChapter = await post.findOne({ name });
    if (existingChapter) {
      return res.status(404).json({ message: "chapter already exist" })
    }
    const newChapter = await post.create({ name, description: data })
    res.status(200).json({ result: newChapter })
  }


  catch (error) {
    res.status(500).json("something wrong...")
  }
}

export const getChapters = async (req, res) => {
  try {
    const chapterList = await post.find();
    res.status(200).json(chapterList);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error)
  }
}

export const editChapters=async(req,res)=>
{
  const {id:_id}=req.params;
  const {name,data}=req.body;
  // console.log(_id);
  // console.log({name,data});
  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("chapter not found");
  }
  try{
    const updatedchapters=await post.findByIdAndUpdate(_id,{
      $set:{
        'name':name,
        'description':data
      }
    })
    res.status(200).json(updatedchapters);
  }catch(error){
    res.status(405).json({message:error.message});
  }
}
 
export const editPages=async(req,res)=>
{
  const {id:_id}=req.params;
  const {name,data,pageId}=req.body;
  console.log(_id);
   console.log({name,data,pageId});
  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("page not found");
  }
  if(!mongoose.Types.ObjectId.isValid(pageId)){
    return res.status(404).send('Page unavailable')
  }
  try{
    const updatedPage = await post.updateOne(
      {_id: _id, "pages._id":pageId},
      {
        $set: {
          "pages.$.name": name,
          "pages.$.description": data
        }
      },
      {
        new: true
      }
    )
    res.status(200).json(updatedPage);
  }catch(error){
    res.status(405).json({message:error.message});
    console.log(error.message);
  }
}

// export const editCommentQues = async (req,res) => {
//   const {id:_id} = req.params;
//   const {commentId,commentBody} = req.body;
//   if(!mongoose.Types.ObjectId.isValid(_id)){
//     return res.status(404).send('Question unavailable')
//   }
//   if(!mongoose.Types.ObjectId.isValid(commentId)){
//     return res.status(404).send('Comment unavailable')
//   }
//   try {
//     const updatedComment = await Questions.updateOne(
//       {_id: _id, "comment._id":commentId},
//       {
//         $set: {
//           "comment.$.commentBody":commentBody
//         }
//       },
//       {
//         new: true
//       }
//     )
//     res.status(200).json(updatedComment)
//   } catch (error) {
//     res.status(405).json(error)
//     console.log(error);
//   }
// }

export const pageUsers= async(req, res) => {
  const { id: _id } = req.params;
  const { name,data} = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).send('chapter unavailable...');
  }
  try {
      const addpage = await post.findByIdAndUpdate( _id, { $addToSet: {'pages': [{ name,description:data }]}})
      res.status(200).json(addpage)
  } catch (error) {
      res.status(400).json('error in updating')
  }
}


