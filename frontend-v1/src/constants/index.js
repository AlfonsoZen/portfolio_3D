import {
  mobile,
  backend,
  creator,
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
  unam,
  platzi,
  udemy,
  cambridge,
  IEEE,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Computer Engineering Student",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Bilingual",
    icon: creator,
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
    title: "Computer Engineering",
    company_name: "UNAM",
    icon: unam,
    iconBg: "#E6DEDD",
    date: "August 2021 - Up to now",
    points: [
      "Embarking on my journey towards becoming a computer engineer at UNAM. Currently in my 4th semester and excited for all that's yet to come!",
    ],
  },
  {
    title: "EEEXtreme 16.0 Programming Competition",
    company_name: "IEEE",
    icon: IEEE,
    iconBg: "#E6DEDD",
    date: "October 2022",
    points: [
      "Participated in the prestigious EEEXtreme 16.0 Programming Competition hosted by IEEE. My team, 'CODERAW,' rose to the challenge and successfully tackled the competition's toughest problems.",
    ],
  },
  {
    title: "First Certificate in English (FCE)",
    company_name: "University of Cambridge",
    icon: cambridge,
    iconBg: "#E6DEDD",
    date: "August 2022",
    points: [
      "I successfully passed the rigorous First Certificate in English (FCE) exam from the University of Cambridge. My score of 163 earned me the B2+ level, a testament to my dedication and hard work.",
    ],
  },
  {
    title: "Modern JavaScript Course",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "August 2022",
    points: [
      " Completed an intensive Modern JavaScript Course on Udemy, building over 15 impressive projects in just 46.5 hours. This course expanded my knowledge and skills in web development significantly.",
    ],
  },
  {
    title: "Platzi Expert Membership",
    company_name: "Platzi",
    icon: platzi,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Demonstrated my dedication to lifelong learning by enrolling in the Platzi Expert Membership program. Through this program, I gained valuable skills in both technology and interpersonal communication, setting me up for success in my career.",
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