import { Seminar } from "../models/seminar.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const createSeminar = asyncHandler( async (req, res) => {

    const { title, description, date, price, participants } = req.body;

    // if([title, description, speaker, date, price].some(field => field?.trim() === ""))
    // {
    //     throw new ApiError(400, "All fields are required")
    // }
    const user = await User.findById(req.user?._id);    

    
    if (user.role!="Host"){
        throw new ApiError(400,"User Must be Host To Create Seminar")
    }// } Doubt needed to be solved
    
    if ([title,description, date, price ].some(field => typeof field === 'string' && field.trim() === "")) {
        throw new ApiError(400, "All fields are required");
      }
    const newSeminar = await Seminar.create({
        title,
        description,
        speaker: req.user._id,
        date,
        price,
        participants

        // owner: req.user._id
    })

    const createdSeminar = await Seminar.findById(newSeminar._id).select("-user");

    if(!createdSeminar){
        throw new ApiError(500, "Something went wrong while creating task")
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201, createdSeminar, "Seminar created successfully")
    )

})

const updateSeminar = asyncHandler( async (req, res) => {
    
    const { title, description, date, price} = req.body;

    if(!title && !description && !date && !price){
        throw new ApiError(400, "Atleast update one field")
    }

    if(!title){
        throw new ApiError(400, "Current title name is required")
    }

    const userId = req.user._id;

    const currentSeminar = await Seminar.findOne({ user: userId, title: title }).exec();
    if (!currentSeminar) {
        return res.status(404).json({ message: 'Seminar not found' });
    }

   if(title) currentSeminar.title = title;
   if(description) currentSeminar.description = description;
   if(date) currentSeminar.date = date;
   if(price) currentSeminar.price = price;

    const newSeminar = await currentSeminar.save();

    if(!newSeminar){
        throw new ApiError(500, "Failed to update Seminar, try again later")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, newSeminar, "Seminar updated successfully")
    )

})

const deleteSeminar = asyncHandler( async (req, res) => {

    const { title } = req.body;

    if(!title){
        throw new ApiError(400, "title is required")
    }

    const userId = req.user._id;

    const deletedSeminar = await Seminar.findOneAndDelete({ user: userId, title: title }).exec();
    if (!deletedSeminar) {
        return res.status(404).json({ message: 'Seminar not found' });
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, deletedSeminar, "Seminar deleted successfully")
    )

})

const findAllSeminar = asyncHandler( async (req, res) => {

    const userId = req.user._id;

    const seminars = await Seminar.find({ user: userId }).select("-user").exec();

    if(!seminars){
        throw new ApiError(404, "No seminar found")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, seminars, "All tasks")
    )

})

export{
    createSeminar,
    updateSeminar,
    deleteSeminar,
    findAllSeminar
}