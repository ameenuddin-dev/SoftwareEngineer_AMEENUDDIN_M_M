import { Code2, Cloud, Database, Layers3, ShieldCheck } from "lucide-react";

export const resume = {
  name: "Ameenuddin M M",
  role: "Software Engineer",
  phone: "+91 6363056373",
  email: "ameenfff8@gmail.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  location: "Bangalore Karnataka, India",
  resumePath: "/resume/Ameenuddin_m_m_SoftwareEngineer.pdf",
};

export const nav = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Certificates",
  "Contact",
];

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
      "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js and Node.js) and REST APIs.",
      "Implemented backend APIs, database workflows and responsive React.js interfaces to deliver reliable application features.",
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

export const certificates = [
  {
    title: "Software Development Engineer Intern",
    company: "Deal Amaze Solutions",
    date: "Sept 2025 — May 2026",

    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "Socket.IO",
      "JavaScript",
    ],

    description:
      "Worked on full-stack web applications using the MERN stack, developing responsive React.js interfaces, Node.js and Express.js REST APIs, MongoDB data workflows, authentication, and real-time application features.",

    certificate:
      "/certificates/Intership Appreciation Certificate - Ameenuddin (1).pdf",
  },
  {
    title: "Java Full Stack Developer Trainee",
    company: "QSpiders",
    date: "Jan 2025 — Sept 2025",

    stack: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "JPA",
      "REST APIs",
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "MySQL",
      "SQL",
      "AWS",
      "Git",
      "Postman",
    ],

    description:
      "Completed intensive Java Full Stack Developer training with hands-on learning in Core Java, OOP, Collections, Exception Handling, Multithreading, JDBC, SQL, Hibernate, JPA, Spring, Spring Boot, Spring MVC and REST API development. Built frontend applications using HTML, CSS, JavaScript and React.js, while working with MySQL for relational data management. Gained practical exposure to application deployment and cloud fundamentals using AWS services including EC2 and S3, along with Git, GitHub and Postman for version control and API testing.",

    highlights: [
      "Developed backend applications using Java and Spring Boot.",
      "Built and tested RESTful APIs using Spring MVC and Postman.",
      "Worked with Hibernate and JPA for database integration.",
      "Designed and optimized SQL queries using MySQL.",
      "Built responsive frontend interfaces using HTML, CSS, JavaScript and React.js.",
      "Learned AWS cloud fundamentals with hands-on exposure to EC2 and S3.",
      "Used Git and GitHub for source-code management and project collaboration.",
    ],

    certificate: "/certificates/Java Full Stack Course Certifacate (1).pdf",
  },
  {
    title: "Machine Learning with Python Trainee",
    company: "Abeyaantrix Softlab",
    date: "Sept 2022 — Dec 2022",

    stack: [
      "Python",
      "Machine Learning",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "Jupyter Notebook",
    ],

    description:
      "Completed hands-on training in Machine Learning with Python, covering data preprocessing, exploratory data analysis, feature engineering, supervised and unsupervised learning, model training, evaluation and data visualization. Worked with Python libraries including NumPy, Pandas, Matplotlib and Scikit-learn to analyze datasets, build machine learning models and evaluate their performance.",

    highlights: [
      "Performed data cleaning and preprocessing using Python and Pandas.",
      "Analyzed datasets using exploratory data analysis and visualization techniques.",
      "Implemented supervised learning algorithms using Scikit-learn.",
      "Worked with classification and regression models.",
      "Applied feature selection and basic feature engineering techniques.",
      "Evaluated models using appropriate performance metrics.",
      "Used Jupyter Notebook for experimentation, analysis and model development.",
    ],
    certificate: "/certificates/MLP INTERNSHIP.pdf",
  },
];
