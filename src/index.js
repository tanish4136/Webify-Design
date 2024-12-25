const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is on port '+port)
})

// app.use((req, res, next)=>{
//     if(req.method==='GET'){
//         res.send('GET requests are disabled')
//     }
//     else{
//         next()
//     }
// })
// app.use((req, res, next)=>{
//     res.status(503).send('Site under maintainance, please try later !')
// })

//stringify calls the function 'toJSON' always before stringifying.
//So we can alter what we want stringify to show
// const pet ={
//     name : 'coco'
// }
// pet.toJSON = function(){
//     return {}
// }
// console.log(JSON.stringify(pet))

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async() =>{
//     // const task = await Task.findById('5f69ad281aad2b51d4c5fded')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('5f69ad181aad2b51d4c5fdeb')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()