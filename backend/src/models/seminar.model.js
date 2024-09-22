import mongoose, {Schema} from "mongoose";

const seminarSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    speaker: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    price: { type: Number, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
   
    
},{
    timestamps: true
})

export const Seminar = mongoose.model("Seminar",seminarSchema) 