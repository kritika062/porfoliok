import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#Experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Learning and applying knowledge through hands-on projects ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I ensure smooth collaboration and adapt quickly",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Exploring AI Concepts and Technologies",
    description: "Learning AI and seeking internships.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CSR Impact Tracker- Event Analytics ",
    des: "Built a full-stack CSR analytics platform with secure login and real-time dashboard visualization of corporate event data.",
    img: "/csr.png",
    iconLists: ["/aws.svg", "/s3.svg", "/ec2.svg", "/github1.png"],
    link: "https://github.com/Kritikarg20/secure-3-tier-aws",
    whyBuilt: "This project was built to explore how event data can be visualized and interpreted more effectively. Having organized large-scale events like TEDxHyderabad and CSR Impact, I noticed how much valuable data—such as participation, donations, and volunteer details—often remains unused after events. I created this project as a way to learn how to process and represent raw data visually, transforming it into meaningful insights using charts and analytics dashboards."
  },
  {
    id: 2,
    title: "Fake News Origin Tracer",
    des: "An interactive web tool to combat misinformation by scraping article metadata using domain heuristics and similarity algorithms.",
    img: "/fnot.png",
    iconLists: ["/re.svg", "/exp1.svg", "/nodejs.svg"],
    link: "https://github.com/Kritikarg20/saarthiAI",
    whyBuilt: "Fake News Origin Tracer was developed out of curiosity about how misinformation spreads online. I wanted to learn how to track and analyze online content using Python and APIs, so I built a prototype that identifies and visualizes the possible origin of fake news stories. The project helped me understand data extraction, API integration, and information visualization in a real-world context."
  },
  {
    id: 3,
    title: "R&D InsightHub – AI Document Analysis Platform",
    des: "Engineered a full-stack web platform that analyzes research papers using AI-powered document processing.",
    img: "/RD.png",
    iconLists: ["/python.svg", "/github1.png"],
    link: "https://github.com/Kritikarg20/AES-Password-Manager",
  whyBuilt: "R&D InsightHub was inspired by my internship experience at DRDO, I wanted to understand how AI could make document review and knowledge extraction easier, so I built this project as a learning experiment to implement an AI-based document analysis system. It allowed me to explore how natural language processing can summarize research and extract key insights."
},
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    desc: "Demonstrated foundational knowledge of cloud computing, AWS architecture, and core services.",
    link: "https://www.credly.com/badges/c3538a42-b4ff-40b4-b7cb-377654af1709",
  },
  {
    name: "Cloud Platform Job Simulation",
    issuer: "Verizon (via Forage)",
    desc: "Completed a virtual experience simulating product design and planning for a new VPN product on Verizon’s cloud platform.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/uu47f3odrfruEWjKw/aNJGnRtgfiK5fQqcR_uu47f3odrfruEWjKw_QHvELtSMHopeQt3Xm_1736659749475_completion_certificate.pdf",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Python Developer Intern, DRDO-DRDL (Defense Research and Development Laboratory)",
    desc: "\n\nDeveloped Python-based data processing, automation and encryption modules for the Flight Control Systems Wing of BrahMos Aerospace, contributing to mission-critical software development.\n\n\n\nCollaborated with scientists and engineers to analyze system requirements and automate processes supporting missile development workflows.\n\n\n\n\nAcquired extensive experience in Python programming within a specialized professional setting.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Kritikarg20",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kritika-r-g-a30120325/",
  },
];
