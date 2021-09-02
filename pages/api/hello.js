// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ck from 'chalk'
import fs from 'fs'
import path from 'path'


export default function helloAPI(req, res) {
  // console.log( ck.green("log this on the server"))
  // fs.mkdir("./dataBase",(err) => err && console.log("coldn't create"))
  // fs.readdir("./dataBase",(err,file) => console.log(file))
  // fs.writeFile("./dataBase/users.json","{name:'this is a bad guy'}",(file) => file && console.log('created succesfully'))
  
 let files = fs.readFile('./dataBase/users.json','utf-8',(err,data) => {
   let files = JSON.stringify(data)
   return files
   
  })

  console.log(files);
  res.status(200).json({data: files})
}
