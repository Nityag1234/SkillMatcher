import React from 'react';
import styled from 'styled-components';
import { Calendar, Clock, Users, BookOpen } from 'lucide-react';
import Navbar from './Navbar.tsx';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1E3A8A 0%, #16C0B9 100%);
  padding: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  background-color: #f3f4f6;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  color: #1E3A8A;
  margin: 0;
`;

const CardBody = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const CardDetail = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const RegisterButton = styled.button`
  background: linear-gradient(to right, #16C0B9, #1E3A8A);
  color: white;
  border: none;
  padding: 0.75rem;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const seminars = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React and start building modern web applications.",
    date: "June 15, 2023",
    duration: "4 weeks",
    participants: 30,
    level: "Beginner"
  },
  {
    id: 2,
    title: "Advanced JavaScript Techniques",
    description: "Dive deep into JavaScript and master advanced concepts and patterns.",
    date: "July 1, 2023",
    duration: "6 weeks",
    participants: 25,
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Full Stack Development with Node.js",
    description: "Build complete web applications using Node.js, Express, and MongoDB.",
    date: "July 20, 2023",
    duration: "8 weeks",
    participants: 20,
    level: "Advanced"
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    description: "Learn the fundamentals of user interface and user experience design.",
    date: "August 5, 2023",
    duration: "5 weeks",
    participants: 35,
    level: "Beginner"
  },
  {
    id: 5,
    title: "Mobile App Development with React Native",
    description: "Create cross-platform mobile apps using React Native framework.",
    date: "August 15, 2023",
    duration: "7 weeks",
    participants: 25,
    level: "Intermediate"
  },
  {
    id: 6,
    title: "Data Visualization with D3.js",
    description: "Master the art of creating interactive and dynamic data visualizations.",
    date: "September 1, 2023",
    duration: "6 weeks",
    participants: 20,
    level: "Intermediate"
  }
];

export default function CardPage() {
  return (
    <>
    <div className="container mx-auto p-4 mt-20">
    <PageWrapper>
        <Navbar/>
      {/* <PageTitle>Upcoming Tech Seminars</PageTitle> */}
      <CardGrid>
        {seminars.map((seminar) => (
          <Card key={seminar.id}>
            <CardHeader>
              <CardTitle>{seminar.title}</CardTitle>
            </CardHeader>
            <CardBody>
              <CardDescription>{seminar.description}</CardDescription>
              <CardDetail>
                <Calendar size={14} />
                {seminar.date}
              </CardDetail>
              <CardDetail>
                <Clock size={14} />
                {seminar.duration}
              </CardDetail>
              <CardDetail>
                <Users size={14} />
                {seminar.participants} participants
              </CardDetail>
              <CardDetail>
                <BookOpen size={14} />
                {seminar.level}
              </CardDetail>
            </CardBody>
            <RegisterButton>Register</RegisterButton>
          </Card>
        ))}
      </CardGrid>
    </PageWrapper>
    </div>
    </>
  );
}