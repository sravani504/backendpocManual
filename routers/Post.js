import { chapterusers,getChapters,editChapters,pageUsers, editPages} from "../controllers/auth.js";

import  express from "express";
const router=express.Router();

router.post("/add", chapterusers )
router.patch("/addpage/:id",pageUsers );
router.get("/getchapters", getChapters)
router.patch('/add/update/:id',editChapters);
router.patch("/editPage/:id", editPages);
export default router;
