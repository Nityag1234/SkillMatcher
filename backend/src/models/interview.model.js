import mongoose, { Schema } from "mongoose";

const interviewSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    interviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Refers to User
    interviewee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Refers to User
    status: { type: String, enum: ["Scheduled", "Completed", "Cancelled"], default: "Scheduled" },
    duration: { type: Number }, // Duration in minutes
    feedback: { type: String }
}, {
    timestamps: true
});

export const Interview = mongoose.model("Interview", interviewSchema);
