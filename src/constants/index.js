import {
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mern,
    aws,
    automation,
    fidelity,
    hsbc,
    deloitte,
    tcs
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mean Stack Developer",
      icon: mern,
    },
    {
      title: "Cloud Developer",
      icon: aws,
    },
    {
      title: "Automation expert",
      icon: automation,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Lead Frontend Developer",
      company_name: "Fidelity Investments",
      icon: fidelity,
      iconBg: "#383E56",
      date: "June 2017 - Present",
      points: [
        "Working as a lead frontend developer to develop and migrate existing wires(Money Transfer) and trade manager(trade execution and management) platform which are highly critical and the backbone of the prime services.",
        "My responsibilities include implementing web applications using React with Typescript, redux, from concept to deployment, standardizing all output with new, responsive, mobile first strategy, assessing UI/UX requirement with feasibility and working with product teams to introduce new features.",
        "Highly experienced with enterprise scale grade component to work with large data sets.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior UI developer",
      company_name: "HSBC",
      icon: hsbc,
      iconBg: "#E6DEDD",
      date: "November 2016 - May 2017",
      points: [
        "Front end developer for retail banking and wealth management platform, was responsible to migrate existing DOJO framework to React based framework.",
        "Created custom React libraries for the banking application which was reused by different application team.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "The core banking platform had a different authentication mechanism, created a separate oauth 2 module which supports kerberos based authentication.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Deloitte",
      icon: deloitte,
      iconBg: "#383E56",
      date: "Feb 2015 - Oct 2016",
      points: [
        "Worked as a full stack engineer working in both frontend and backend components for a telecom client.",
        "Created an automation suite that reduced the prepopulation of data in that public sector website by 75% which was given as the most innovative idea of the quarter.",
        "Responsible for creating backend services using java/spring boot",
        "Responsible to create Ci/CD pipeline and deploying into cloud foundry.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Tata Consultancy Services",
      icon: tcs,
      iconBg: "#E6DEDD",
      date: "Oct 2011 - Jan 2015",
      points: [
        "Worked for Apple client as a full stack engineer, and their different internal applications which manages different customer suppprt program for Apple.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participated in 24/7 production support activity"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };