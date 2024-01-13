import { PrismaClient } from '@prisma/client';
import express from "express";
const app=express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/",async(req,res)=>{
    const users = await prisma.User.findMany();
    res.send(users);
})

app.post("/",async(req,res)=>{
    const name=req.body.name;
    await prisma.User.create({
        data:{
            Name:name
        }
    })
    res.send({"message":"User added successfully"});
})

app.put("/",async(req,res)=>{
    try{
   await prisma.User.update({
    where:{Id:req.body.id},
    data:{Email:req.body.email}
   })
   res.send({"message":"User Updated successfully"})
 }
 catch(e){
    res.send({"message":"Only Unique EmailId is allowed"})
 }
})




app.listen(4001,()=>{
    console.log("Server started on 4001");
})


