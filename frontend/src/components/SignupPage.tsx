// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { ChevronDown } from 'lucide-react'
// import React from 'react'

// export default function SignupPage() {
//   const [role, setRole] = useState('')
  

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Join SkillMatcher</h2>
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullname"
//               name="fullname"
//               className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="dateofbirth" className="block text-sm font-medium text-gray-700">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               id="dateofbirth"
//               name="dateofbirth"
//               className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <div className="mt-2 space-y-2">
//               {['Male', 'Female', 'Other'].map((gender) => (
//                 <div key={gender} className="flex items-center">
//                   <input
//                     id={gender.toLowerCase()}
//                     name="gender"
//                     type="radio"
//                     className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                   />
//                   <label htmlFor={gender.toLowerCase()} className="ml-3 block text-sm font-medium text-gray-700">
//                     {gender}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="relative">
//             <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//               Role
//             </label>
//             <select
//               id="role"
//               name="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
//             >
//               <option value="">Select a role</option>
//               <option value="job_seeker">Job Seeker</option>
//               <option value="company">Company</option>
//               <option value="host">Host</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <ChevronDown className="h-4 w-4" />
//             </div>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             type="submit"
//           >
//             Sign Up
//           </motion.button>
//         </form>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <a href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
//             Sign in
//           </a>
//         </p>
//       </motion.div>
//     </div>
//   )
// }












import { ChevronDown } from 'lucide-react';
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// export default function SignupPage() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     fullname: '',
//     dateOfBirth: '',
//     role: ''
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Helper function to convert 'yyyy-mm-dd' to 'dd-mm-yyyy'
//   const formatDate = (dateString) => {
//     const [year, month, day] = dateString.split('-');
//     return `${day}-${month}-${year}`;
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const formattedData = {
//       ...formData,
//       dateOfBirth: formatDate(formData.dateOfBirth) // Convert date format before sending
//     };
//     try {
//       const response = await fetch('http://localhost:5000/api/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },

//         body: JSON.stringify(formattedData),
//         credentials: 'include' // Important for cookie handling
//       });
//       const data = await response.json();
//       if (response.ok) {
//         console.log("User registered successfully:", data);
        
//         // Redirect to home page after successful signup
//         navigate('/home');
//       } else {
//         console.error("Error:", data.message);
//       }
//       console.log(response);
//     } 
    
//     catch (error) {
//       console.error("Request failed:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Join SkillMatcher</h2>
//         <form className="space-y-4" onSubmit={handleSignup}>
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
//               required
//               value={formData.username}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
//               required
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
//               required
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullname"
//               name="fullname"
//               className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
//               required
//               value={formData.fullname}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               id="dateOfBirth"
//               name="dateOfBirth"
//               className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
//               required
//               value={formData.dateOfBirth}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//               Role
//             </label>
//             <select
//               id="role"
//               name="role"
//               className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
//               value={formData.role}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select Role</option>
//               <option value="Job seeker">Job seeker</option>
//               <option value="Company">Company</option>
//               <option value="Host">Host</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-lg hover:bg-indigo-700 transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }




