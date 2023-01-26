
import post from "../models/Post.js";
import Page from "../models/Page.js";
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


export const pageUsers = async (req, res) => {
  const { name, data } = req.body;
  console.log(req.body);
  try {
    const existingPage = await Page.findOne({ name });
    if (existingPage) {
      return res.status(404).json({ message: "Page already exist" })
    }
    const newPage = await Page.create({ name, description: data })
    res.status(200).json({ results: newPage })
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


export const getPages = async (req, res) => {
  try {
    const pageList = await Page.find();
    res.status(200).json(pageList);
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
  const {name,data}=req.body;
  console.log(_id);
   console.log({name,data});
 
  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("page not found");
  }
  try{
    const updatedPages=await Page.findByIdAndUpdate(_id,{
      $set:{
        'name':name,
        'description':data
      }
    })
    res.status(200).json(updatedPages);
  }catch(error){
    res.status(405).json({message:error.message});
    console.log(error.message);
  }
}

