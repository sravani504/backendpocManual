import { chapterusers,getChapters,editChapters,pageUsers,editPages,deleteChapter,deletePage} from "../controllers/auth.js";

import  express from "express";
const router=express.Router();

router.post("/add", chapterusers )
router.patch("/addpage/:id",pageUsers );
router.get("/getchapters", getChapters)
router.patch('/add/update/:id',editChapters);
router.patch("/editPage/:id", editPages);
router.patch('/delete/chapter/:id',deleteChapter);
router.patch('/delete/page/:id',deletePage);

export default router;
