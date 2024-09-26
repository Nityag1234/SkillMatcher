

// import React, { useState } from 'react'
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card.tsx"
// import { Button } from "./ui/button.tsx"
// import { Input } from "./ui/input.tsx"
// import { Textarea } from "./ui/textarea.tsx"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog.tsx"
// import { Label } from "./ui/label.tsx"
// import { Edit, X } from 'lucide-react'
// // Mock data for projects
// const initialProjects = [
//   {
//     id: 1,
//     title: "E-commerce Platform",
//     description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
//     languages: ["JavaScript", "React", "Node.js", "MongoDB"],
//     image: "/placeholder.svg?height=100&width=200"
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     description: "A collaborative task management application with real-time updates and team features.",
//     languages: ["TypeScript", "Angular", "Firebase"],
//     image: "/placeholder.svg?height=100&width=200"
//   },
//   // Add more projects as needed
// ]

// export default function Component() {
//   const [projects, setProjects] = useState(initialProjects)
//   const [selectedProject, setSelectedProject] = useState(null)
//   const [isEditing, setIsEditing] = useState(false)

//   const handleEdit = (project) => {
//     setSelectedProject({ ...project })
//     setIsEditing(true)
//   }

//   const handleSave = () => {
//     setProjects(projects.map(p => p.id === selectedProject.id ? selectedProject : p))
//     setIsEditing(false)
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setSelectedProject({ ...selectedProject, [name]: value })
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">My Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {projects.map((project) => (
//           <Card key={project.id} className="flex flex-col">
//             <CardHeader>
//               <CardTitle>{project.title}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4 rounded" />
//               <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
//             </CardContent>
//             <CardFooter className="mt-auto">
//               <Dialog>
//                 <DialogTrigger asChild>
//                   <Button variant="outline" onClick={() => setSelectedProject(project)}>More Details</Button>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px]">
//                   <DialogHeader>
//                     <DialogTitle>{isEditing ? 'Edit Project' : 'Project Details'}</DialogTitle>
//                   </DialogHeader>
//                   {selectedProject && (
//                     <div className="mt-4">
//                       {isEditing ? (
//                         <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
//                           <div className="space-y-4">
//                             <div>
//                               <Label htmlFor="title">Title</Label>
//                               <Input id="title" name="title" value={selectedProject.title} onChange={handleInputChange} />
//                             </div>
//                             <div>
//                               <Label htmlFor="description">Description</Label>
//                               <Textarea id="description" name="description" value={selectedProject.description} onChange={handleInputChange} />
//                             </div>
//                             <div>
//                               <Label htmlFor="languages">Languages (comma-separated)</Label>
//                               <Input id="languages" name="languages" value={selectedProject.languages.join(', ')} onChange={(e) => handleInputChange({ target: { name: 'languages', value: e.target.value.split(', ') } })} />
//                             </div>
//                             <Button type="submit">Save Changes</Button>
//                           </div>
//                         </form>
//                       ) : (
//                         <>
//                           <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-40 object-cover mb-4 rounded" />
//                           <h3 className="font-bold mb-2">{selectedProject.title}</h3>
//                           <p className="text-sm text-muted-foreground mb-4">{selectedProject.description}</p>
//                           <div className="flex flex-wrap gap-2 mb-4">
//                             {selectedProject.languages.map((lang, index) => (
//                               <span key={index} className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">{lang}</span>
//                             ))}
//                           </div>
//                           <Button onClick={() => handleEdit(selectedProject)} className="w-full">
//                             <Edit className="mr-2 h-4 w-4" /> Edit Project
//                           </Button>
//                         </>
//                       )}
//                     </div>
//                   )}
//                 </DialogContent>
//               </Dialog>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }




import React, { useState } from 'react'
import Navbar from './Navbar.tsx';

export default function Component() {
  const initialProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
      languages: ["JavaScript", "React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=100&width=200"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      languages: ["TypeScript", "Angular", "Firebase"],
      image: "/placeholder.svg?height=100&width=200"
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (project) => {
    setSelectedProject({ ...project });
    setIsEditing(true);
  };

  const handleSave = () => {
    setProjects(
      projects.map((p) => (p.id === selectedProject.id ? selectedProject : p))
    );
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProject({ ...selectedProject, [name]: value });
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4 mt-20">
   {/* </div> <div className="container mx-auto p-4"> */}
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg shadow">
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
            <div className="mt-2">
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                {isEditing ? "Cancel Edit" : "Edit Project"}
              </button>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>

            {isEditing && (
              <div className="mt-4">
                <input
                  name="title"
                  value={selectedProject.title}
                  onChange={handleInputChange}
                  className="border px-4 py-2 w-full mb-2"
                />
                <textarea
                  name="description"
                  value={selectedProject.description}
                  onChange={handleInputChange}
                  className="border px-4 py-2 w-full mb-2"
                />
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
}
