const app = require("express");
const verifyToken = require("../utils/verifyToken");
const { createpost, allpost, postUpdate, postDelete } = require("../controller/postController");
const postRoute = app.Router()

postRoute.post("/createpost",verifyToken,createpost)
postRoute.get("/Allpost",verifyToken,allpost)
postRoute.put("/postUpdate",verifyToken,postUpdate)
postRoute.delete("/postDelete/:id",verifyToken,postDelete)



postRoute.get("/verify",verifyToken,(req,res)=>{
    res.send("ok")
})


module.exports = postRoute;