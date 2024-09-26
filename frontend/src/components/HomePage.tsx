// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import React from 'react'

// interface Project {
//   id: string
//   title: string
//   description: string
//   owner: string
//   images: string[]
// }

// interface ProjectCardProps {
//   project: Project
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
//   const [currentImage, setCurrentImage] = useState(0)

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % project.images.length)
//   }

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
//   }

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="bg-white rounded-lg shadow-lg overflow-hidden"
//     >
//       <div className="relative h-48">
//         <img
//           src={project.images[currentImage]}
//           alt={`${project.title} - Image ${currentImage + 1}`}
//           className="w-full h-full object-cover"
//         />
//         <button
//           onClick={prevImage}
//           className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
//         >
//           <ChevronLeft size={20} />
//         </button>
//         <button
//           onClick={nextImage}
//           className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
//         >
//           <ChevronRight size={20} />
//         </button>
//         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {project.images.map((_, index) => (
//             <div
//               key={index}
//               className={`w-2 h-2 rounded-full ${
//                 index === currentImage ? 'bg-white' : 'bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
//         <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
//         <div className="flex justify-between items-center">
//           <span className="text-sm text-gray-500">Created by: {project.owner}</span>
//           <a href={`/projects/${project.id}`}>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
//               More Details
//             </button>
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// interface HomePageProps {
//   projects?: Project[]
// }

// const dummyProjects: Project[] = [
//   {
//     id: '1',
//     title: 'Eco-Friendly Smart Home',
//     description: 'A cutting-edge smart home system that prioritizes energy efficiency and sustainable living. Features include solar panel integration, advanced water conservation, and AI-driven climate control.',
//     owner: 'Green Tech Innovations',
//     images: [
//       '/placeholder.svg?height=200&width=300&text=Smart+Home',
//       '/placeholder.svg?height=200&width=300&text=Solar+Panels',
//       '/placeholder.svg?height=200&width=300&text=Water+System'
//     ]
//   },
//   {
//     id: '2',
//     title: 'Urban Vertical Farm',
//     description: 'Revolutionary vertical farming solution for urban areas. Utilizes hydroponics and IoT sensors to maximize crop yield in minimal space, bringing fresh produce closer to city dwellers.',
//     owner: 'Future Farms Inc.',
//     images: [
//       '/placeholder.svg?height=200&width=300&text=Vertical+Farm',
//       '/placeholder.svg?height=200&width=300&text=Hydroponics',
//       '/placeholder.svg?height=200&width=300&text=IoT+Sensors'
//     ]
//   },
//   {
//     id: '3',
//     title: 'AI-Powered Education Platform',
//     description: 'An innovative e-learning platform that uses artificial intelligence to personalize learning paths for students. Adapts in real-time to individual learning styles and progress.',
//     owner: 'EduTech Solutions',
//     images: [
//       '/placeholder.svg?height=200&width=300&text=AI+Education',
//       '/placeholder.svg?height=200&width=300&text=Personalized+Learning',
//       '/placeholder.svg?height=200&width=300&text=Progress+Tracking'
//     ]
//   },
//   {
//     id: '4',
//     title: 'Blockchain Supply Chain',
//     description: 'A transparent and secure supply chain management system built on blockchain technology. Ensures product authenticity and traceability from manufacturer to consumer.',
//     owner: 'Chain Secure Systems',
//     images: [
//       '/placeholder.svg?height=200&width=300&text=Blockchain',
//       '/placeholder.svg?height=200&width=300&text=Supply+Chain',
//       '/placeholder.svg?height=200&width=300&text=Traceability'
//     ]
//   },
//   {
//     id: '5',
//     title: 'Virtual Reality Fitness',
//     description: 'Immersive VR fitness experience that combines gaming elements with personalized workout routines. Makes exercise fun and engaging for users of all fitness levels.',
//     owner: 'FitTech VR',
//     images: [
//       '/placeholder.svg?height=200&width=300&text=VR+Fitness',
//       '/placeholder.svg?height=200&width=300&text=Gamified+Workouts',
//       '/placeholder.svg?height=200&width=300&text=Personalized+Routines'
//     ]
//   }
// ]

// const HomePage: React.FC<HomePageProps> = ({ projects = dummyProjects }) => {
//   if (!projects || projects.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <p className="text-xl text-gray-600">No projects available at the moment.</p>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HomePage



import Navbar from './Navbar.tsx';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Smart Home App',
    owner: 'Jane Doe',
    images: ['"C:\Users\nitya\Pictures\IMG_1652.HEIC"?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
  {
    id: 2,
    title: 'Fitness Tracker',
    owner: 'John Smith',
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    owner: 'Alice Johnson',
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
  {
    id: 4,
    title: 'A-commerce Platform',
    owner: 'Nitya Gandhi',
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
  {
    id: 4,
    title: 'A-commerce Platform',
    owner: 'Nitya Gandhi',
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
  {
    id: 4,
    title: 'A-commerce Platform',
    owner: 'Nitya Gandhi',
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
];

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const nextImage = (projectId: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % projects.find(p => p.id === projectId)!.images.length
    }));
  };

  const prevImage = (projectId: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + projects.find(p => p.id === projectId)!.images.length) % projects.find(p => p.id === projectId)!.images.length
    }));
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #E0F7FA, #B2EBF2, #80DEEA)',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      fontSize: '2.5rem',
      fontWeight: 'bold' as const,
      color: '#006064',
      textAlign: 'center' as const,
      marginBottom: '2rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      justifyContent: 'center',
    },
    card: {
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
    },
    carousel: {
      position: 'relative' as const,
      height: '200px',
      overflow: 'hidden',
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
    },
    carouselButton: {
      position: 'absolute' as const,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255, 255, 255, 0.5)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '1.5rem',
      color: '#006064',
    },
    prevButton: {
      left: '10px',
    },
    nextButton: {
      right: '10px',
    },
    cardContent: {
      padding: '1.5rem',
    },
    projectTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold' as const,
      color: '#00838F',
      marginBottom: '0.5rem',
    },
    projectOwner: {
      fontSize: '1rem',
      color: '#0097A7',
      marginBottom: '1rem',
    },
    button: {
      background: 'linear-gradient(to right, #00BCD4, #006064)',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: 'bold' as const,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div className="container mx-auto p-4 mt-20">
    <div style={styles.page}>
      <Navbar/>
      {/* <h1 style={styles.header}>Featured Projects</h1> */}
      <div style={styles.cardContainer}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            style={styles.card}
            whileHover={{ scale: 1.05 }}
          >
            <div style={styles.carousel}>
              <motion.img
                src={project.images[currentImageIndex[project.id] || 0]}
                alt={`${project.title} image`}
                style={styles.carouselImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <button
                style={{ ...styles.carouselButton, ...styles.prevButton }}
                onClick={() => prevImage(project.id)}
              >
                &#8249;
              </button>
              <button
                style={{ ...styles.carouselButton, ...styles.nextButton }}
                onClick={() => nextImage(project.id)}
              >
                &#8250;
              </button>
            </div>
            <div style={styles.cardContent}>
              <h2 style={styles.projectTitle}>{project.title}</h2>
              <p style={styles.projectOwner}>by {project.owner}</p>
              <motion.button
                style={styles.button}
                whileHover={{ scale: 1.05 }}
              >
                View Project
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomePage;