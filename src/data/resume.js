import { Code2, Cloud, Database, Layers3, ShieldCheck } from "lucide-react";

export const resume = {
  name: "Ameenuddin M M",
  role: "Software Engineer",
  phone: "+91 6363056373",
  email: "ameenfff8@gmail.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  location: "Bangalore Karnataka, India",
  resumePath: "/resume/Ameenuddin_M_M_Resume.pdf",
};

export const nav = ["About", "Experience", "Projects", "Skills", "Contact"];

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Layers3,
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "Spring Security",
      "JWT",
      "Hibernate",
      "JPA",
    ],
  },
  {
    title: "Data",
    icon: Database,
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "PL/SQL",
      "Query Optimization",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "AWS EC2",
      "AWS S3",
      "IAM",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "Linux",
      "Postman",
      "Git",
      "GitHub",
      "JIRA",
    ],
  },
  {
    title: "Engineering",
    icon: ShieldCheck,
    items: [
      "OOP",
      "DSA",
      "Java 8",
      "Multithreading",
      "Design Patterns",
      "System Design",
      "SDLC",
      "Agile/Scrum",
      "JUnit",
    ],
  },
];

export const experience = [
  {
    company: "Deal Amaze Solutions",
    date: "Sept 2025 — May 2026",
    role: "Software Development Engineer Intern",
    points: [
      "Developed full-stack applications using Java, Spring Boot, React.js and REST APIs with JWT authentication.",
      "Optimized SQL queries and implemented JUnit testing, improving application performance and reliability.",
    ],
  },
  {
    company: "DevHaven Technologies",
    date: "Feb 2024 — Jan 2025",
    role: "Software Development Engineer",
    points: [
      "Built scalable Java/Spring Boot microservices and REST APIs for high-volume enterprise applications.",
      "Managed AWS EC2, S3 and IAM deployments in Linux environments and supported Agile development cycles.",
    ],
  },
  {
    company: "Freelance",
    date: "Jun 2023 — Dec 2023",
    role: "Software Developer",
    points: [
      "Developed responsive web applications using Java, Spring Boot, MySQL and RESTful APIs for client requirements.",
      "Implemented CRUD operations and automated API data workflows to improve application efficiency and reduce manual work.",
    ],
  },
];

export const projects = [
  {
    name: "Salesforce Auth Integration",
    type: "Enterprise Integration",
    stack: [
      "Node.js",
      "Express.js",
      "React.js",
      "Salesforce REST API",
      "OAuth 2.0",
    ],
    image: "/preview/SalesForce.png",
    text: "Engineered secure Salesforce integration using the OAuth 2.0 Authorization Code Flow, automated token rotation middleware and responsive CRM data workflows.",
    link: "https://salesforce-oauth.vercel.app/login",
  },
  {
    name: "FlipZone",
    type: "Scalable E-Commerce Engine",
    stack: ["Java", "Spring Boot", "Spring Security", "MySQL", "REST API"],
    image: "/preview/AmazonClone.png",
    text: "Architected a multi-role commerce engine with JWT access control for Customer, Seller and Admin workflows, optimized schemas, filtering, carts and checkout.",
    link: "https://github.com/ameenuddin-dev/Flipzone-project",
  },
  {
    name: "Tagbuch",
    type: "Multi-Tier Blogging Engine",
    stack: ["Next.js", "Node.js", "Socket.io", "Express.js", "MySQL"],
    image: "/preview/MediumClone.png",
    text: "Developed a full-stack blogging platform with authenticated real-time direct messaging over WebSockets and optimized relational data models.",
    link: "https://github.com/ameenuddin-dev/MediumClone",
  },
  {
    name: "DealAmaze",
    type: "E-Commerce Platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS"],
    image: "/preview/DealAmaze.png",
    text: "Developed a scalable shopping platform covering product browsing, authentication, cart management and order processing, deployed on AWS EC2.",
    link: "https://dealamaze.com/",
  },
  {
    name: "GOtruks",
    type: "Logistics Platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS"],
    image: "/preview/Gotruck.png",
    text: "Built a transportation platform for truck bookings and shipment requirements, backed by Express APIs, MongoDB and AWS EC2 deployment.",
    link: "https://www.gotruks.com/",
  },
];

export const metrics = [
  { value: "5+", label: "AWS deployments" },
  { value: "20%+", label: "latency reduction" },
  { value: "99.5%", label: "availability" },
  { value: "3", label: "engineering roles" },
];
