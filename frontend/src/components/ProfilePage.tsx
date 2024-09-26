import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Edit2, Camera, Save, Briefcase, Calendar, Mail, User } from 'lucide-react'

interface UserProfile {
  username: string
  email: string
  fullName: string
  dateOfBirth: string
  gender: string
  role: string
  profilePic: string
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    username: 'johndoe',
    email: 'john@example.com',
    fullName: 'John Doe',
    dateOfBirth: '1990-01-01',
    gender: 'Male',
    role: 'Job Seeker',
    profilePic: '/placeholder.svg?height=200&width=200'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target) {
          setProfile({ ...profile, profilePic: event.target.result as string })
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-32 w-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
                >
                  <img
                    src={profile.profilePic}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                {isEditing && (
                  <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer shadow-md">
                    <Camera className="h-6 w-6 text-purple-600" />
                    <input
                      id="profile-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileUpload}
                    />
                  </label>
                )}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-gray-800">{profile.fullName}</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                >
                  {isEditing ? <Save className="h-5 w-5 mr-2" /> : <Edit2 className="h-5 w-5 mr-2" />}
                  {isEditing ? 'Save' : 'Edit Profile'}
                </motion.button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileField icon={<User />} label="Username" value={profile.username} isEditing={isEditing} onChange={handleInputChange} />
                <ProfileField icon={<Mail />} label="Email" value={profile.email} isEditing={isEditing} onChange={handleInputChange} />
                <ProfileField icon={<Calendar />} label="Date of Birth" value={profile.dateOfBirth} isEditing={isEditing} onChange={handleInputChange} type="date" />
                <ProfileField icon={<User />} label="Gender" value={profile.gender} isEditing={isEditing} onChange={handleInputChange} options={['Male', 'Female', 'Other']} />
                <ProfileField icon={<Briefcase />} label="Role" value={profile.role} isEditing={isEditing} onChange={handleInputChange} options={['Job Seeker', 'Company', 'Host']} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

interface ProfileFieldProps {
  icon: React.ReactNode
  label: string
  value: string
  isEditing: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  type?: string
  options?: string[]
}

function ProfileField({ icon, label, value, isEditing, onChange, type = 'text', options }: ProfileFieldProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-grow">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        {isEditing ? (
          options ? (
            <select
              name={label.toLowerCase().replace(' ', '')}
              value={value}
              onChange={onChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              name={label.toLowerCase().replace(' ', '')}
              value={value}
              onChange={onChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          )
        ) : (
          <p className="mt-1 text-sm text-gray-900">{value}</p>
        )}
      </div>
    </div>
  )
}