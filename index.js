const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/home',(req,res)=>{
    res.send('Welcome to home page')
})
app.get('/contact',(req,res)=>{
    res.send('Welcome to contact page')
})
app.get('about', (req,res)=>{
    res.send('Welcome to About Page.')
})
app.listen(3000,()=>{
    console.log('Server Listening on port 3000...')
})