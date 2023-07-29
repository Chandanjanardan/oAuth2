const router = require("express").Router()
const passport= require("passport")
const CLIENT_URL="http://localhost:3000"


router.get("/login/failed",(req,res)=>{
    if(req,user){

        res.status(401).json(
            {msg:"failed to auth",
            user:req.user,
        }
            )
        }
})

router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect(CLIENT_URL)
})

router.get("/google",passport,passport.authenticate("google",{scope:["profile"]}))

router.get("/google/callback",passport.authenticate("google",{
    successRedirect:CLIENT_URL,
    failureRedirect:"/login/failed"
}))

module.exports= router