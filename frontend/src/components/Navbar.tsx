// import { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import { Menu, X, User } from 'lucide-react'
// //import Link from 'next/link'
// import { Link } from 'react-router-dom'; 
// import React from 'react';

// const NavbarContainer = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   background-color: #1E3A8A;
//   padding: 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   z-index: 1000;
// `

// const NavLinks = styled.div<{ isOpen: boolean }>`
//   display: flex;
//   align-items: center;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     position: absolute;
//     top: 100%;
//     left: 0;
//     right: 0;
//     background-color: #1E3A8A;
//     display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
//     padding: 1rem;
//   }
// `

// const NavLink = styled(Link)<{ isActive: boolean }>`
//   color: white;
//   text-decoration: none;
//   margin: 0 1rem;
//   font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
//   border-bottom: ${({ isActive }) => (isActive ? '2px solid #16C0B9' : 'none')};
//   transition: color 0.3s ease;

//   &:hover {
//     color: #16C0B9;
//   }

//   @media (max-width: 768px) {
//     margin: 0.5rem 0;
//   }
// `

// const NavButton = styled.button`
//   background: linear-gradient(to right, #16C0B9, #1E3A8A);
//   color: white;
//   border: none;
//   padding: 0.5rem 1rem;
//   border-radius: 20px;
//   cursor: pointer;
//   font-weight: bold;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: filter 0.3s ease;

//   &:hover {
//     filter: brightness(1.1);
//   }
// `

// const HamburgerButton = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   color: white;
//   font-size: 1.5rem;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `

// const ProfileButton = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.5rem;
//   border-radius: 50%;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: rgba(255, 255, 255, 0.1);
//   }
// `

// const links = [
//   { name: 'Home', href: '/home' },
//   { name: 'My Projects', href: '/projects' },
//   { name: 'Seminars', href: '/seminar' },
//   { name: 'Messages', href: '/messages' },
// ]

// export default function Component() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [activeLink, setActiveLink] = useState('/')

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) {
//         setIsOpen(false)
//       }
//     }

//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   const toggleMenu = () => setIsOpen(!isOpen)

//   return (
//     <NavbarContainer>
//       <HamburgerButton onClick={toggleMenu}>
//         {isOpen ? <X /> : <Menu />}
//       </HamburgerButton>
//       <NavLinks isOpen={isOpen}>
//         {links.map((link) => (
//           <NavLink
//             key={link.name}
//             href={link.href}
//             isActive={activeLink === link.href}
//             onClick={() => setActiveLink(link.href)}
//           >
//             {link.name}
//           </NavLink>
//         ))}
//       </NavLinks>
//       <ProfileButton aria-label="Profile">
//         <User size={24} />
//       </ProfileButton>
//     </NavbarContainer>
//   )
// }




import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Menu, X, User } from 'lucide-react'
import { Link } from 'react-router-dom';
import React from 'react';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1E3A8A;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #1E3A8A;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    padding: 1rem;
  }
`

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #16C0B9' : 'none')};
  transition: color 0.3s ease;

  &:hover {
    color: #16C0B9;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`

const NavButton = styled.button`
  background: linear-gradient(to right, #16C0B9, #1E3A8A);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.1);
  }
`

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const ProfileButton = styled(Link)`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const links = [
  { name: 'Home', href: '/home' },
  { name: 'My Projects', href: '/myprojects' },
  { name: 'Seminars', href: '/seminar' },
  { name: 'Messages', href: '/messages' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <NavbarContainer>
      <HamburgerButton onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </HamburgerButton>
      <NavLinks isOpen={isOpen}>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            isActive={activeLink === link.href}
            onClick={() => setActiveLink(link.href)}
          >
            {link.name}
          </NavLink>
        ))}
      </NavLinks>
      <ProfileButton to="/profile" aria-label="Profile">
        <User size={24} />
      </ProfileButton>
    </NavbarContainer>
  )
}
