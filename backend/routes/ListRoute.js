import  express  from "express";
import {getLists, getListsbyId, saveList, updateList, deleteList} from "../controllers/ListController.js"
const router = express.Router()

router.get('/list', getLists)
router.get('/list/:id', getListsbyId)
router.post('/list', saveList)
router.patch('/list/:id', updateList)
router.delete('/list/:id', deleteList)
export default router