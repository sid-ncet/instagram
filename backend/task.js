const express= require('express')
var cors = require('cors');
const bodyParser= require('body-parser')/* app.component.css or your component's CSS file */
const app= express()
app.use(cors());
app.use(bodyParser.json())
app.post('/login',(req,res)=>{
    const mobileNumber=req.body.number
    console.log('mobile',mobileNumber);
    res.json({message: 'login success'})
})
app.listen(4000,()=>{
    console.log('successfully connected')
})