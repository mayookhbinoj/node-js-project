const express = require('express');
const port = 3000
const app = express();
const bodyparser = require('body-parser')
const session = require('express-session')
const path = require('path');
const{v4:uuidv4}=require("uuid");
const router = require("./router")
// Use cookie-parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/static',express.static(path.join(__dirname,'public/assets')))
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))
app.use('/route',router);
app.get('/', (req, res) => {
  // Read a cookie using req.cookies


  res.render('base',{title:"login system"});
});

app.listen(port, () => {
  console.log('Server listening on port 3000');
});