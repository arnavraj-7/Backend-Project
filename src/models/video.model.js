import mongoose ,{Schema} from 'mongoose';

const videoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User", // Reference to the User model
        required:true
    },
    videoFile:{
        type:String ,//cloudinary url
        required:true,
    },
    thumbnail:{
        type:String,//coludinary url
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    duration:{
        type:number,
        required:true
    },
    isPublished:{
        type:Boolean,
        default:true
    },

},{
    timestamps:true
})