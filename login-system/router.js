const e = require("express");
var express = require("express");
var router =express.Router();
const credemtial = {
    email:"123@gmail.com",
    password:"123"
}
router.post('/login',(req,res)=>
{  res.set('Cache-Control', 'no-store');
    console.log(req.body);
if(req.body.email== credemtial.email&&req.body.password==credemtial.password)
{
req.session.user=req.body.email;
res.redirect("/route/dashboard");
}
else{console.log("D");
    res.end("inalid username");
}});
router.get('/dashboard',(req,res)=>{
    res.set('Cache-Control', 'no-store');
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.redirect('/');
    }
})
router.get('/logout',(req,res) =>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("error")
        }else{
            res.render('base',{title:"Express",logout:"logout successfully"})
          }
    })
}

)

module.exports = router;