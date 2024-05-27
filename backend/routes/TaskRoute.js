const {Router} = require("express")

const {getTasks, saveTask, updateTask, deleteTask} = require("../controllers/TaskControllers")
const router = Router()

router.get("/get", getTasks);
router.get("/save", saveTask);

module.exports = router;