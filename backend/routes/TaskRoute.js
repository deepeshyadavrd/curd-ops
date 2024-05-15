const {Router} = require("express")

const {getTasks} = require("../controllers/TaskControllers")
const router = Router()

router.get("/get", getTasks);

module.exports = router;