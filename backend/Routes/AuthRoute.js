const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const { isAuthenticated } = require("../middlewares/isAuthenticated");

const router = express.Router();

// step1 redirect to google login
router.get("/google",
    passport.authenticate("google",{scope:["profile","email"]})
);

router.get("/google/callback",
    passport.authenticate("google",{session:false}),
    (req,res)=>{
        try{
            const token = jwt.sign(
                {id:req.user._id,email:req.user.email},
                process.env.JWT_SECRET,
                {expiresIn:"7d"}
            );

            res.redirect(
                `${process.env.CLIENT_URL}/auth-success?token=${token}`
            );

        }catch(error){
            console.log("Google login error:",error);

            res.redirect(
                `${process.env.CLIENT_URL}/login?error=google_failed`
            );
        }
    }
);

router.get("/me", isAuthenticated, (req,res)=>{
    res.json({success:true,user:req.user}); // ← fix typo এখানে
});

module.exports = router;   