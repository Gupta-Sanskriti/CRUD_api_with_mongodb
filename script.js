const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const User = require('./User')


mongoose.connect("mongodb://localhost/testdb", ()=>{
    console.log("connected")
}, e =>{
    console.error(e)
})

// run()
/*
async function run(){
    try{
        const user = await User.create({
            name:"Kyle",
            age: 20,
            email:"sans@gmail.om",
            hobbies : ["reading", "writing", "bowling"],
            address:{
                street: "Main Street",
                city: "lucknow"
            }
        })
        user.updatedAt = 5;
        await user.save()
        console.log(user)

    }catch (e){
        console.log(e.message)
    }
    
    
    // const user = new User({name: "Kyle", age:26})
    // await user.save()
}
*/

// qurering in mongoose
query()
async function query(){
    try{
        // const user = await User.where("age")
        // .gt(20)
        // .where("name")
        // .equals("Kyle")
        // .populate("bestfriend")
        // .limit(1)
        // .select("age")
        // user[0].bestFriend = "639c49316101675016a46749"
        // user[0].save()
        // const user = await User.find().where({"hobbies":[]})
        // const user = await User.find().where({id:"639cb726511ea3cd99854c6b"})

        /*
        // statics method
        const user = await User.findByTheName("sally")
        console.log(user)
        user.sayHi()
        */

        /*
        // QUERY method
        const user = await User.find().byName("Kyle")
        console.log(user)
        */

        // virtual property
        const user = await User.find({name:"Kyle", email:"kyle@gmail.com"}).limit(1)
        console.log(user)
        console.log(user.namedEmail)


    }catch (e){
        console.log(e.message)
    }
}























// Schema --> schema defines what the structure of your data looks like
