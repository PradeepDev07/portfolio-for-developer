export const projects = [
  {
  id: 9,
  title: "Code Snippet Manager",
  description:
    "A full-stack MERN application that allows developers to store, organize, and share code snippets efficiently.",
  longDescription:
    "Code Snippet Manager is a developer-focused full-stack web application built using the MERN stack. It enables users to securely authenticate, create and manage code snippets with full CRUD functionality, and organize them using tags. The platform supports syntax highlighting for multiple programming languages, public and private snippet visibility, and snippet forking to encourage collaboration. Advanced search and filtering make exploring snippets fast and intuitive. The application is fully responsive and optimized for both desktop and mobile use.",
  features: [
    "JWT-based User Authentication",
    "Create, Read, Update, and Delete (CRUD) Code Snippets",
    "Syntax Highlighting for Multiple Languages",
    "Search Snippets by Language, Tags, or Username",
    "Public & Private Snippet Visibility",
    "Snippet Forking for Reusability",
    "Tag-based Organization System",
    "Responsive Design for All Devices"
  ],
  badge: "Full Stack",
  category: "Full-stack",
  tags: [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "Tailwind CSS",
    "JWT",
    "Mongoose",
    "React Router"
  ],
  image:
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80",
  liveUrl: "https://code-snippets-manager-weld.vercel.app/",
  repoUrl: "https://github.com/PradeepDev07/code-snippets-manager",

},
{
  id: 10,
  title: "React Task Manager",
  description:
    "A role-based task management application with drag-and-drop functionality, built as an assignment for Absolute App Labs.",
  longDescription:
    "React Task Manager is a frontend-focused task management application developed as part of an assignment for Absolute App Labs. The app supports role-based authentication for Admin and User roles, enabling conditional page rendering and permissions. Tasks can be assigned to users and managed using an intuitive drag-and-drop interface powered by react-dnd. The application provides real-time feedback via toast notifications, client-side routing with React Router, and local state persistence. It is designed for clarity, usability, and future backend integration.",
  features: [
    "Role-based Authentication (Admin & User)",
    "Conditional Page Rendering Based on User Role",
    "Drag-and-Drop Task Management",
    "Client-side Routing with React Router",
    "Toast Notifications for User Feedback",
    "Unique ID Generation using UUID",
    "LocalStorage-based Data Persistence",
    "Clean and Simple UI"
  ],
  badge: "Frontend",
  category: "Front-end",
  tags: [
    "React",
    "React Router",
    "react-dnd",
    "react-hot-toast",
    "UUID",
    "LocalStorage",
    "Vite"
  ],
  image:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
  liveUrl:
    "https://react-task-manager-git-main-pradeep01273-5910s-projects.vercel.app/login",
  repoUrl: "https://github.com/PradeepDev07/React-task-Manager",

},
  {
  id: 6,
  title: "GIPHY Clone",
  description:
    "A React-based GIPHY clone that allows users to search, view, and favorite GIFs using the GIPHY API.",
  longDescription:
    "A modern frontend application built with React and Vite that replicates core GIPHY functionality. Users can search for GIFs in real time, view trending content, and mark favorites. The app integrates the GIPHY SDK for efficient data fetching and uses Tailwind CSS for responsive styling. Designed with scalability in mind, future enhancements include authentication, social sharing, and advanced filtering.",
  features: [
    "Real-time GIF Search",
    "Trending GIFs Display",
    "Favorite GIFs Support",
    "Responsive UI with Tailwind CSS",
    "Environment-based API Key Management"
  ],
  badge: "Frontend",
  category: "Front-end",
  tags: ["React", "Vite", "Tailwind CSS", "GIPHY API", "React Router"],
  image:
    "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1000&q=80",
  liveUrl: "https://giphy-clone-drab.vercel.app/",
  repoUrl: "https://github.com/PradeepDev07/Giphy-clone"
}
,{
  id: 7,
  title: "Apple Landing Page",
  description:
    "A 3D interactive Apple-style landing page showcasing MacBook with smooth animations and immersive visuals.",
  longDescription:
    "A high-fidelity 3D landing page inspired by Apple’s product marketing style. Built using React and Three.js, the project features interactive 3D MacBook models rendered with @react-three/fiber and @react-three/drei, enhanced by GSAP-powered animations. Tailwind CSS ensures a clean, responsive UI, while Vite provides a fast development experience. The project focuses on visual storytelling, performance, and modern frontend animation techniques.",
  features: [
    "Interactive 3D MacBook Model",
    "Smooth GSAP-based Animations",
    "Apple-style Product Presentation",
    "Responsive Layout with Tailwind CSS",
    "Optimized Build with Vite"
  ],
  badge: "Frontend",
  category: "Front-end",
  tags: [
    "React",
    "Three.js",
    "React Three Fiber",
    "GSAP",
    "Tailwind CSS",
    "Vite"
  ],
  image:
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80",
  liveUrl: "https://apple-landing-page-olive.vercel.app/",
  repoUrl: "https://github.com/PradeepDev07/Apple-Landing-page"
},
{
  id: 8,
  title: "Amrutam MedLink",
  description:
    "A full-stack MERN application for booking medical appointments and managing doctor–patient interactions.",
  longDescription:
    "Amrutam MedLink is a comprehensive healthcare platform built using the MERN stack. It enables users to search for doctors by specialty and location, view detailed doctor profiles, book and manage appointments, and follow preferred doctors. The application includes secure authentication, protected routes, context-based state management, and a modern responsive UI. The backend uses Node.js and Express with file-based JSON storage and is deployed on Render, while the frontend is deployed on Vercel.",
  features: [
    "Secure User Authentication (Login & Signup)",
    "Doctor Search with Filters (Specialty, Location)",
    "Detailed Doctor Profiles",
    "Appointment Booking & Management",
    "Follow Favorite Doctors",
    "Protected Routes for Authenticated Users",
    "Context API for Global State Management",
    "Toast Notifications for User Feedback",
    "Fully Responsive Design"
  ],
  badge: "Frontend",
  category: "Front-end",
  tags: [
    "React",
    "Node.js",
    "React Router",
    "Context API",
    "Vite",
    "CSS Modules"
  ],
  image:
    "https://images.unsplash.com/photo-1580281658629-05c3f1c3b1f3?auto=format&fit=crop&w=1000&q=80",
  liveUrl: "https://mern-amrutam-med-link.vercel.app/",
  repoUrl: "https://github.com/PradeepDev07/MERN-Amrutam-MedLink"
}



  
];
