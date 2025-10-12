import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Cohort')
})
app.get('/hitesh', (req, res) => {
  res.send('Hitesh')
})
app.get('/piyush', (req, res) => {
  res.send('Piyush')
})

// console.log(process.env.PORT || 3000)
//Common Error here we are going to make 
//always add slash '/' in the starting of the url
//http://localhost:3000/hitesh
//http://localhost:3000/piyush

//you need to restart if you make any changes in the code
//way to do speed run

//get type ki request / pr aa rhi hai
//thr callback pura jo syntax hai voh express ke thorugh dia ja rha hai

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})

//app is a web server that listens on port 3000 and responds with "Hello World!" to requests to the root URL (/).
//To run this code, you need to have Node.js and the Express package installed. You can install Express using npm (Node Package Manager) with the command npm install express. Then, you can run the code using node index.js (assuming you save it in a file named index.js).