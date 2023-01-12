const mongoose = require('mongoose');


const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
        validate:{      //for custom validator
            validator: v => v%2 === 0,
            message: props => `${props.value} is not an even number`,
        }
    },
    email : {           // type and required validation
        type: String,
        minLength:10,
        maxLength:255,
        required: true,
        upppercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    createdAt: {
        type: Date,
        immutable : true,       // immutable means that we can not change the 
        default: ()=> Date.now(), 
    },
    updatedAt: {
        type: Date,
        default: ()=> Date.now(),
    },
    bestfriend : mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema
})

// We can define the methods this way -- this can be helpful in using the models everywhere and defining it at one place
userSchema.methods.sayHi = function(){
    console.log(`hi My name is ${this.name}`)
}

userSchema.statics.findByTheName = function(name){
    return this.find({name: new RegExp(name, "i")})
}

userSchema.query.byName = function(name){
    return this.where({name: new RegExp(name,"i")})
}

// Virtual property
userSchema.virtual("namedEmail").get(function(){
    return `${this.name} <${this.email}>`
})


module.exports = mongoose.model("User",userSchema )