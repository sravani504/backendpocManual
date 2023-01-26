import { pageUsers,getPages,editPages } from "../controllers/auth.js";

import  express from "express";
const router=express.Router();

router.post("/addpage",pageUsers );
router.get("/getpages",getPages);
router.patch('/add/update/:id',editPages)
export default router;