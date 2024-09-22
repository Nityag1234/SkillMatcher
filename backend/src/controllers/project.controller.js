import { Project } from "../models/project.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createProject = asyncHandler( async (req, res) => {

    const { title, description, technologies, media, owner } = req.body;

    if([title, description, technologies, media, owner].some(field => field?.trim() === ""))
    {
        throw new ApiError(400, "All fields are required")
    }
    
    const newProject = await Project.create({
        title,
        description,
        technologies,
        media,
        owner: req.user._id
    })

    const createdProject = await Project.findById(newProject._id).select("-user");

    if(!createdProject){
        throw new ApiError(500, "Something went wrong while creating task")
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201, createdProject, "Task created successfully")
    )

})

const updateProject = asyncHandler( async (req, res) => {
    
    const { title, description, technologies, media } = req.body;

    if(!title && !description && !technologies && !media){
        throw new ApiError(400, "Atleast update one field")
    }

    if(!title){
        throw new ApiError(400, "Current title name is required")
    }

    const userId = req.user._id;

    const currentProject = await Project.findOne({ user: userId, title: title }).exec();
    if (!currentProject) {
        return res.status(404).json({ message: 'Project not found' });
    }

   if(title) currentProject.title = title;
   if(description) currentProject.description = description;
   if(technologies) currentProject.technologies = technologies;
   if(media) currentProject.media = media;

    const newProject = await currentProject.save();

    if(!newProject){
        throw new ApiError(500, "Failed to update project, try again later")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, newProject, "Project updated successfully")
    )

})

const deleteProject = asyncHandler( async (req, res) => {

    const { title } = req.body;

    if(!title){
        throw new ApiError(400, "title is required")
    }

    const userId = req.user._id;

    const deletedProject = await Project.findOneAndDelete({ user: userId, title: title }).exec();
    if (!deletedProject) {
        return res.status(404).json({ message: 'Project not found' });
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, deleteProject, "Project deleted successfully")
    )

})

const findAllProject = asyncHandler( async (req, res) => {

    const userId = req.user._id;

    const projects = await Project.find({ user: userId }).select("-user").exec();

    if(!projects){
        throw new ApiError(404, "No project found")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, projects, "All tasks")
    )

})

export{
    createProject,
    updateProject,
    deleteProject,
    findAllProject
}