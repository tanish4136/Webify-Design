//Only a Practice File
//CRUD- create read update delete
const {MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser : true}, (error, client) =>{
    if(error){
        return console.log('Unable to connect to database !')
    }
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     _id : id,
    //     Name : 'Jasika',
    //     Age : 21
    // }, (error, result) =>{
    //     if(error){
    //         return console.log('Could not insert into database')
    //     }
    //     console.log(result.ops)
    // })
    
    // db.collection('users').findOne({_id : new ObjectID("5f65cb32c3ca323120f555fc")},(error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch !')
    //     }
    //     console.log(user)
    // })
    //find function returns a cursor i.e. pointer to the set of values
    // db.collection('users').find({Age : 21}).toArray((error, users) =>{
    //     if(error){
    //         return console.log('Unable to fetch !')
    //     }
    //     console.log(users)
    // })
    // db.collection('users').find({Age : 21}).count((error, count) =>{
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({_id : new ObjectID("5f65cd1f63ef2820d89addd6")},(error,task)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(task)
    // })
    // db.collection('tasks').find({completed : true}).toArray((error,tasks)=>{
    //     console.log(tasks)
    // })
    
    // db.collection('users').updateOne({
    //     _id : new ObjectID("5f65c90cdc7d2838f8997ac5")
    // },{
    //     $inc : {
    //         Age : 1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //   console.log(error)  
    // })

    // db.collection('tasks').updateMany({
    //     completed : true
    // },{
    //     $set : {
    //         completed : false
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     Age : 21
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    db.collection('tasks').deleteOne({
        description : 'save'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})