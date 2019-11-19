var HTMLParser = require('node-html-parser');
const express = require('express')

let app = express()

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index',{root:''})
})

app.post('/',(req,res)=>{
    const root = HTMLParser.parse(req.body.editordata)
    console.log(root.toString())
    res.render('index',{root:root.toString()})
})

app.listen(3000)