const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('*',(req,res)=>{
    res.send('Invalid Page')
})
app.get('*',(req,res)=>{
    res.send('page not found')
})
app.listen(3000,()=>{
    console.log('Server Listening on port 3000...')
})