










// 'use client'
// import React, { useState, useRef, useEffect } from 'react'
// import { Button } from './ui/button.tsx'
// import { Input } from './ui/input.tsx'
// import { ScrollArea } from "./ui/scroll-area.tsx"
// import { Separator } from "./ui/separator.tsx"
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.tsx"
// import { Send, ArrowLeft } from 'lucide-react'

// const initialConversations = [
//   // Mock data...
//   {
//     id: 1,
//     companyName: 'Tech Innovators Inc.',
//     lastMessage: 'We had like to schedule an interview...',
//     avatar: '/placeholder.svg?height=40&width=40',
//     messages: [
//       { id: 1, sender: 'company', text: 'Hello! We are impressed with your profile.' },
//       { id: 2, sender: 'jobseeker', text: 'Thank you! I am excited about the opportunity.' },
//       { id: 3, sender: 'company', text: 'We had like to schedule an interview. Are you available next week?' },
//     ]
//   },
//   {
//     id: 2,
//     companyName: 'Global Solutions Ltd.',
//     lastMessage: 'Your application has been received...',
//     avatar: '/placeholder.svg?height=40&width=40',
//     messages: [
//       { id: 1, sender: 'company', text: 'Your application has been received. We will review it shortly.' },
//       { id: 2, sender: 'jobseeker', text: 'Great, thank you for the update!' },
//     ]
//   },
// ]

// export default function Messages() {
//   const [conversations, setConversations] = useState(initialConversations)
//   const [selectedConversation, setSelectedConversation] = useState(null)
//   const [newMessage, setNewMessage] = useState('')
//   const [userType, setUserType] = useState('jobseeker')
//   const inputRef = useRef(null)

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus()
//     }
//   }, [newMessage])

//   const handleSendMessage = () => {
//     if (newMessage.trim() === '') return

//     const updatedConversations = conversations.map(conv => {
//       if (conv.id === selectedConversation.id) {
//         return {
//           ...conv,
//           messages: [
//             ...conv.messages,
//             { id: conv.messages.length + 1, sender: userType, text: newMessage }
//           ],
//           lastMessage: newMessage
//         }
//       }
//       return conv
//     })

//     setConversations(updatedConversations)
//     setSelectedConversation(updatedConversations.find(conv => conv.id === selectedConversation.id))
//     setNewMessage('')
//   }

//   const ConversationList = () => (
//     <ScrollArea className="h-[calc(100vh-5rem)] bg-gray-100 rounded-lg shadow-lg p-4">
//       {conversations.map((conversation) => (
//         <div key={conversation.id} className="p-4 cursor-pointer hover:bg-gray-200 rounded-lg transition-all duration-200" onClick={() => setSelectedConversation(conversation)}>
//           <div className="flex items-center space-x-4">
//             <Avatar>
//               <AvatarImage src={conversation.avatar} alt={conversation.companyName} />
//               <AvatarFallback>{conversation.companyName.charAt(0)}</AvatarFallback>
//             </Avatar>
//             <div className="flex-1 space-y-1">
//               <p className="text-sm font-semibold text-gray-800 leading-none">{conversation.companyName}</p>
//               <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
//             </div>
//           </div>
//           <Separator className="mt-4" />
//         </div>
//       ))}
//     </ScrollArea>
//   )

//   const ConversationView = () => (
//     <div className="flex flex-col h-[calc(100vh-5rem)] bg-white rounded-lg shadow-lg">
//       <div className="flex items-center space-x-4 p-4 border-b bg-gray-50">
//         <Button variant="ghost" size="icon" onClick={() => setSelectedConversation(null)}>
//           <ArrowLeft className="h-4 w-4 text-gray-500" />
//         </Button>
//         <Avatar>
//           <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.companyName} />
//           <AvatarFallback>{selectedConversation.companyName.charAt(0)}</AvatarFallback>
//         </Avatar>
//         <h2 className="text-lg font-semibold text-gray-800">{selectedConversation.companyName}</h2>
//       </div>
//       <ScrollArea className="flex-1 p-6 bg-gray-50">
//         {selectedConversation.messages.map((message) => (
//           <div key={message.id} className={`flex ${message.sender === userType ? 'justify-end' : 'justify-start'} mb-4`}>
//             <div className={`max-w-[70%] p-3 rounded-lg shadow-md ${message.sender === userType ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
//               {message.text}
//             </div>
//           </div>
//         ))}
//       </ScrollArea>
//       <div className="p-4 border-t bg-gray-50 flex items-center space-x-2">
//         <Input 
//           ref={inputRef}
//           placeholder="Type a message..." 
//           value={newMessage} 
//           className="bg-gray-100 focus:bg-white border border-gray-300 focus:border-blue-500 rounded-lg"
//           onChange={(e) => setNewMessage(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//         />
//         <Button size="icon" onClick={handleSendMessage} className="bg-blue-600 text-white hover:bg-blue-700">
//           <Send className="h-5 w-5" />
//         </Button>
//       </div>
//     </div>
//   )

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
//         <Button onClick={() => setUserType(userType === 'jobseeker' ? 'company' : 'jobseeker')} className="bg-blue-600 text-white hover:bg-blue-700">
//           Switch to {userType === 'jobseeker' ? 'Company' : 'Job Seeker'} View
//         </Button>
//       </div>
//       {selectedConversation ? <ConversationView /> : <ConversationList />}
//     </div>
//   )
// }



'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Button } from './ui/button.tsx'
import { Input } from './ui/input.tsx'
import { ScrollArea } from "./ui/scroll-area.tsx"
import { Separator } from "./ui/separator.tsx"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.tsx"
import { Send, ArrowLeft } from 'lucide-react'
import Navbar from './Navbar.tsx'
// Mock data for conversations
const initialConversations = [
  {
    id: 1,
    companyName: 'Tech Innovators Inc.',
    lastMessage: 'We had like to schedule an interview...',
    avatar: '/placeholder.svg?height=40&width=40',
    messages: [
      { id: 1, sender: 'company', text: 'Hello! We are impressed with your profile.' },
      { id: 2, sender: 'jobseeker', text: 'Thank you! I am excited about the opportunity.' },
      { id: 3, sender: 'company', text: 'We had like to schedule an interview. Are you available next week?' },
    ]
  },
  {
    id: 2,
    companyName: 'Global Solutions Ltd.',
    lastMessage: 'Your application has been received...',
    avatar: '/placeholder.svg?height=40&width=40',
    messages: [
      { id: 1, sender: 'company', text: 'Your application has been received. We will review it shortly.' },
      { id: 2, sender: 'jobseeker', text: 'Great, thank you for the update!' },
    ]
  },
  // Add more conversations as needed
]

export default function Messages() {
  const [conversations, setConversations] = useState(initialConversations)
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [userType, setUserType] = useState('jobseeker') // Toggle between 'jobseeker' and 'company'
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [newMessage])

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return

    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [
            ...conv.messages,
            { id: conv.messages.length + 1, sender: userType, text: newMessage }
          ],
          lastMessage: newMessage
        }
      }
      return conv
    })

    setConversations(updatedConversations)
    setSelectedConversation(updatedConversations.find(conv => conv.id === selectedConversation.id))
    setNewMessage('')
  }

  const ConversationList = () => (
    <ScrollArea className="h-[calc(100vh-5rem)]">
      {conversations.map((conversation) => (
        <div key={conversation.id} className="p-4 cursor-pointer hover:bg-accent" onClick={() => setSelectedConversation(conversation)}>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={conversation.avatar} alt={conversation.companyName} />
              <AvatarFallback>{conversation.companyName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{conversation.companyName}</p>
              <p className="text-sm text-muted-foreground">{conversation.lastMessage}</p>
            </div>
          </div>
          <Separator className="mt-4" />
        </div>
      ))}
    </ScrollArea>
  )

  const ConversationView = () => (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      <div className="flex items-center space-x-4 p-4 border-b">
        <Button variant="ghost" size="icon" onClick={() => setSelectedConversation(null)}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Avatar>
          <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.companyName} />
          <AvatarFallback>{selectedConversation.companyName.charAt(0)}</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-semibold">{selectedConversation.companyName}</h2>
      </div>
      <ScrollArea className="flex-1 p-4">
        {selectedConversation.messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === userType ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`max-w-[70%] p-3 rounded-lg ${message.sender === userType ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t flex items-center space-x-2">
        <Input 
          ref={inputRef}
          placeholder="Type a message..." 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button size="icon" onClick={handleSendMessage}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto p-4 mt-20"> {/* Adjusted margin to prevent overlap with navbar */}
    <Navbar/>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Messages</h1>
        <Button onClick={() => setUserType(userType === 'jobseeker' ? 'company' : 'jobseeker')}>
          Switch to {userType === 'jobseeker' ? 'Company' : 'Job Seeker'} View
        </Button>
      </div>
      {selectedConversation ? <ConversationView /> : <ConversationList />}
    </div>
  )
}
