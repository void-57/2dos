const mongoose=require('mongoose')
const todoSchema=new mongoose.Schema({
    todo_title:{
        type:String,
        required:true
    },
    is_completed:{
        type:Boolean,
    required:true,
      default:false
    }
})

module.exports=mongoose.model('to_do',todoSchema)