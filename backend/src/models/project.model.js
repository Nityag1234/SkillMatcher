import mongoose, {Schema} from "mongoose";

const projectSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    technologies:{
        type: String
    },
    media:{
        type: String
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
{
    timestamps: true
})

export const Project = mongoose.model("Project",projectSchema) 