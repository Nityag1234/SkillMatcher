import { Interview } from "../models/interview.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createInterview = asyncHandler(async (req, res) => {
    const { title, description, date, interviewee, duration, feedback } = req.body;

    if (!title || !date || !interviewee) {
        throw new ApiError(400, "Title, date, and interviewee are required");
    }

    // Validate the date (check if it's a valid future date)
    const interviewDate = new Date(date);
    if (isNaN(interviewDate.getTime()) || interviewDate < new Date()) {
        throw new ApiError(400, "Invalid or past date");
    }

    const newInterview = await Interview.create({
        title,
        description,
        date: interviewDate,
        interviewer: req.user._id,
        interviewee,
        duration,
        feedback
    });

    return res.status(201).json(new ApiResponse(201, newInterview, "Interview created successfully"));
});


const updateInterview = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, description, date, duration, status, feedback } = req.body;

    const interview = await Interview.findById(id);

    if (!interview) {
        throw new ApiError(404, "Interview not found");
    }

    // Update fields
    if (title) interview.title = title;
    if (description) interview.description = description;
    if (date) interview.date = date;
    if (duration) interview.duration = duration;
    if (status) interview.status = status;
    if (feedback) interview.feedback = feedback;

    const updatedInterview = await interview.save();

    return res.status(200).json(new ApiResponse(200, updatedInterview, "Interview updated successfully"));
});

const deleteInterview = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const interview = await Interview.findByIdAndDelete(id);

    if (!interview) {
        throw new ApiError(404, "Interview not found");
    }

    return res.status(200).json(new ApiResponse(200, interview, "Interview deleted successfully"));
});

const getInterviewById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const interview = await Interview.findById(id).populate('interviewer interviewee', 'username email');

    if (!interview) {
        throw new ApiError(404, "Interview not found");
    }

    return res.status(200).json(new ApiResponse(200, interview, "Interview fetched successfully"));
});

const getAllInterviews = asyncHandler(async (req, res) => {
    const interviews = await Interview.find().populate('interviewer interviewee', 'username email');

    if (!interviews) {
        throw new ApiError(404, "No interviews found");
    }

    return res.status(200).json(new ApiResponse(200, interviews, "All interviews fetched successfully"));
});

export {
    createInterview,
    updateInterview,
    deleteInterview,
    getInterviewById,
    getAllInterviews
};
