import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    students:[{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    }],
    sessions:[
        {startTime : {
            type:String,
            required:true
        },
        endTime : {
            type:String,
            required:true
        },
        days:{
            type:String,
            required:true
        }}
    ]
   
})

const Classroom = mongoose.model("Classroom",classroomSchema)

export default Classroom