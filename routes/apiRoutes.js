const router=require("express").Router()
const fs=require("fs")
const path=require("path")
const {v4:uuidv4}=require("uuid")
router.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname,"../db/db.json"))
    
})
router.post("/notes",(req,res)=>{
    let note=fs.readFileSync("./db/db.json","utf8")
    note=JSON.parse(note)
    req.body.id=uuidv4()
    note.push(req.body)
    note=JSON.stringify(note)
    res.json(note)
    fs.writeFileSync("./db/db.json",note,"utf8")
})

module.exports=router
