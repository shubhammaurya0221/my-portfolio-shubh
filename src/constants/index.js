import blogApplication from "../assets/projects/blogApplication.png";
import geminiAiTool from "../assets/projects/geminiAiTool.jpg";
import myPortfolio from "../assets/projects/myPortfolio.jpg";
import webGen from "../assets/projects/webgenAI.png";
import premier from "../assets/projects/premier.png";
import solarsystem from "../assets/projects/solarsystem.jpg";
import treebay from "../assets/projects/treebay.png";
import virtualedge from "../assets/projects/virtualedge.jpg";
import wanderLust from "../assets/projects/wanderLust.jpg";
import youtubeClone from "../assets/projects/youtubeClone.jpg";
import sifra from "../assets/projects/sifra.png";
import stopwatch from "../assets/projects/stopwatch.png";
import omegawatch from "../assets/projects/omegawatch.png";
import wheatherapp from "../assets/projects/wheatherapp.png";
import loginform from "../assets/projects/loginform.png";


export const HERO_CONTENT = "Transforming ideas into scalable, futuristic web applications with the MERN stack. Building immersive digital experiences.";

export const ABOUT_TEXT = "Dedicated and versatile Full Stack Developer with strong expertise in the MERN stack. Experienced in building and deploying multiple full-stack and frontend projects using MongoDB, Express.js, React.js, Node.js, Tailwind CSS, and Bootstrap. Currently expanding my skill set with Next.js and Generative AI. Passionate about transforming ideas into responsive, user-friendly web applications, while continuously learning, adapting, and growing as a developer.";

export const EXPERIENCES = [
  {
    year: "Sep 2025 - Nov 2025",
    role: "Frontend Web Developer Intern",
    company: "Leafny Web Pack Services",
    description: `Focused on building scalable React interfaces and creating robust, reusable UI components. Responsible for optimizing frontend performance to deliver seamless user experiences across various devices. Collaborate closely with cross-functional teams to integrate features and maintain high code quality standards.`,
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Git"],
  }
];

export const PROJECTS = [
  // Full Stack
  {
    title: "WebGen",
    category: "Full Stack",
    image: webGen,
    description:
      "A production-ready AI Website Builder SaaS built with the MERN stack that enables users to generate and deploy fully functional websites instantly using AI. The platform includes authentication, a credit-based usage system, secure payments via Razorpay, Monaco code editor integration, and one-click deployment with modern UI animations.",
    technologies: ["Deepseek API","MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS","Firebase","Razorpay","Monaco Editor"],
    github: "https://github.com/shubhammaurya0221/genwebai"
  },

  {
    title: "Wanderlust",
    category: "Full Stack",
    image: wanderLust,
    description:
      "A full-stack Airbnb-inspired travel booking platform where users can explore listings, create and manage properties, and interact with dynamic content. The application implements secure authentication, image uploads via Cloudinary, and a scalable backend architecture using MongoDB, Express.js, and Node.js.",
    technologies: ["MongoDB", "Express.js", "EJS", "Node.js", "Bootstrap","Passport.js"],
    github: "https://github.com/shubhammaurya0221/wanderlust"
  },

  // React.js
  {
    title: "Gemini AI Tool",
    category: "React.js",
    image: geminiAiTool,
    description:
      "An AI-powered web application that generates text-based content and summaries using the Gemini API. The interface provides a clean and responsive user experience built with React and Tailwind CSS, enabling users to quickly create and refine AI-generated content.",
    technologies: ["React","Tailwind CSS","Gemini API","Vite"],
    github: "https://github.com/shubhammaurya0221/gemini-ai-tool"
  },

  {
    title: "YouTube Clone",
    category: "React.js",
    image: youtubeClone,
    description:
      "A responsive YouTube-inspired video platform that allows users to search, browse, and watch videos using real-time data from the YouTube API. The application demonstrates modern React architecture, efficient API handling, and a dynamic user interface.",
    technologies: ["React","Tailwind CSS","Rapid API","Vite"],
    github: "https://github.com/shubhammaurya0221/YouTube-clone"
  },

  {
    title: "My Portfolio",
    category: "React.js",
    image: myPortfolio,
    description:
      "A modern developer portfolio built with React and Tailwind CSS to showcase projects, technical skills, and professional experience. The website includes smooth animations, responsive design, and an intuitive layout for presenting work effectively.",
    technologies: ["React", "Tailwind CSS","Framer Motion","Vite"],
    github: "https://github.com/shubhammaurya0221/my-Portfolio"
  },

  {
    title: "VirtuEdge",
    category: "React.js",
    image: virtualedge,
    description:
      "A responsive and visually engaging landing page built with React and Tailwind CSS. The project focuses on modern UI design, responsive layouts, and clean component architecture to deliver a smooth user experience.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/shubhammaurya0221/VirtuEdge"
  },

  {
    title: "Sifra",
    category: "React.js",
    image: sifra,
    description:
      "A modern React-based web interface integrating the Gemini API to demonstrate AI-powered features and interactive UI components. The project emphasizes clean design, responsive layouts, and dynamic content generation.",
    technologies: ["React", "Tailwind CSS","Gemini API","Vite"],
    github: "https://github.com/shubhammaurya0221/Sifra"
  },

  // Assignment
  {
    title: "Blog Application",
    category: ["Assignment","Full Stack"],
    image: blogApplication,
    description:
      "A responsive blog application interface designed for reading and managing articles. The project demonstrates component-based UI development using React and Tailwind CSS with clean layout structure and responsive design principles.",
    technologies: ["React", "Tailwind CSS","Vite"],
    github: ""
  },

  {
    title: "TreeBay",
    category: "Assignment",
    image: treebay,
    description:
      "A full-stack e-commerce listing platform built as an assignment project. It features product listings, responsive UI components, and API-based data management using the MERN stack.",
    technologies: ["MongoDB","Express.js","React", "Node.js","Tailwind CSS","Vite"],
    github: "https://github.com/shubhammaurya0221/treebay-assignment"
  },

  {
    title: "Solar System 3D",
    category: "Assignment",
    image: solarsystem,
    description:
      "An interactive 3D Solar System visualization built with Three.js. The project simulates planetary motion with animations and allows users to explore celestial bodies through an engaging 3D environment.",
    technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
    github: "https://github.com/shubhammaurya0221/solar-System-3D"
  },

  // Basic Projects
  {
    title: "PREMIER",
    category: "Basic Projects",
    image: premier,
    description:
      "A clean and responsive frontend layout designed to showcase a premium product or service. The project focuses on modern UI design principles using HTML and CSS.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/shubhammaurya0221/PREMIER"
  },

  {
    title: "StopWatch",
    category: "Basic Projects",
    image: stopwatch,
    description:
      "A simple stopwatch web application that allows users to start, pause, and reset time. The project demonstrates core JavaScript functionality and DOM manipulation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shubhammaurya0221/StopWatch"
  },

  {
    title: "Weather App",
    category: "Basic Projects",
    image: wheatherapp,
    description:
      "A weather application that fetches real-time weather data from an external API and displays temperature, conditions, and location details through a clean user interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shubhammaurya0221/Weather-WebApp"
  },

  {
    title: "Omega Watch",
    category: "Basic Projects",
    image: omegawatch,
    description:
      "A product landing page inspired by luxury watch brands. The project focuses on visual presentation, responsive layout design, and clean UI structure.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shubhammaurya0221/OMEGA_WATCHS"
  },

  {
    title: "Login Form",
    category: "Basic Projects",
    image: loginform,
    description:
      "A modern login form UI component designed with clean layout and responsive styling using HTML and CSS.",
    technologies: ["HTML", "CSS"],
    github: ""
  }
];

export const CONTACT = {
  address: "Lucknow, Uttar Pradesh, India ",
  phoneNo: "+91 705 439 6198",
  email: "maurya.shubham@0221@gmail.com",
};
