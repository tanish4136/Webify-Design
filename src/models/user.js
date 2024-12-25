const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },email : {
        type : String,
        unique : true,
        required : true,
        trim : true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid !')
            }
        }
    },password :{
        type : String,
        required : true,
        trim :true,
        minlength : 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password contains password !')
            }
        }
    },age : {
        type : Number,
        default : 0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    tokens : [{
        token: {
            type : String,
            required : true
        }
    }],
    avatar : {
        type : Buffer
    }
},{
    timestamps : true
})

userSchema.virtual('tasks',{
    ref : 'Task',
    localField : '_id',
    foreignField : 'owner'
})

userSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

//methods on instances
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id : user._id.toString()}, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({token})
    await user.save()

    return token
}

//static methods on models
userSchema.statics.findByCredentials = async(email, password)=>{
    const user= await User.findOne({email})
    if(!user){
        throw new Error('Unable to login !')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('Unable to login !')
    }

    return user
}

//Hash the plaintext password before saving user
userSchema.pre('save', async function(next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

//Delete all tasks of user before deleting user
userSchema.pre('remove', async function(next){
    const user = this
    await Task.deleteMany({owner : user._id})
    next()
})

const User = mongoose.model('User', userSchema)

// const me = new User({
//     name : '    Hrithik',
//     email : '  TunnuJoshi@gmail.com',
//     password : 'hellohj'
// })
// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error! ',error)
// })

module.exports = User