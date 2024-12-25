const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    description : {
        type : String,
        required : true,
        trim : true
    },completed : {
        type : Boolean,
        default : false
    }, owner :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
},{
    timestamps : true
})
// const todofirst= new Task({
//     description : '    have breakfast  ',
//     completed : true
// })
// todofirst.save().then(()=>{
//     console.log(todofirst)
// }).catch((error)=>{
//     console.log('Error! ',error)
// })

const Task = mongoose.model('Task', taskSchema)
module.exports = Task