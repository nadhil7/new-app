import mongoose from 'mongoose';

const schema = mongoose.Schema;
const userschema = new schema({
    name:{
        type:"string"
    },
    age:{
        type:Number
    },
    phone:{
        type:Number
    }
})
const user = mongoose.model("user",userschema,'user')
export default user

