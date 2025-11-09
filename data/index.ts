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
    title: "Secure 3-Tier Web Application – AWS Cloud",
    des: "Deployed a 3-tier architecture on AWS using EC2, RDS, and S3 + CloudFront. Implemented IAM roles and HTTPS certificates for security and scalability.",
    img: "/km.png",
    iconLists: ["/aws.svg", "/s3.svg", "/ec2.svg", "/github1.png"],
  },
  {
    id: 2,
    title: "SaarthiAI – AI Resume & Portfolio Builder",
    des: "Built with React and Node.js, it helps users craft AI-optimized resumes",
    img: "/sarthi.jpg",
    iconLists: ["/re.svg", "/exp1.svg", "/nodejs.svg"],
    link: "https://github.com/pranavi2/saarthiAI",
  },
  {
    id: 3,
    title: "Password Manager – AES Encryption",
    des: "Developed a Python-based console app for secure password storage using AES encryption and PBKDF2-HMAC key derivation.",
    img: "/p3.png",
    iconLists: ["/python.svg", "/github1.png"],
    link: "https://github.com/pranavi2/AES-Password-Manager",
  },
  {
    id: 4,
    title: "QuickReserve - Full-Stack Booking App",
    des: "Built QuickReserve, a booking platform with secure payments and a modern tech stack.",
    img: "/p4.jpeg",
    iconLists: ["/react.svg", "/nodejs.svg", "/exjs.png", "/mongodb.svg"],
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
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using HTML, CSS, Javascript, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Project Management Fellow",
    desc: "Managed live startup projects, focusing on product and project management in agile environments.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "GDG On-Campus Lead",
    desc: "Organizing cloud and web workshops, mentoring peers on Google Cloud, Firebase, and collaborative development.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },

  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/pranavi2",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/pranavi-t-69aa84254/",
  },
];
