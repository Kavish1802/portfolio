import {wiseTech,consultadd} from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    react,
    redux,
    camp1,
    cosmetology,
    github2
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github2,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
];

export const experiences = [
    {
        title: "Associate Software Engineer",
        company_name: "Wisetech Global",
        icon: wiseTech,
        iconBg: "#1d1765",
        textBg: "#83c6fc",
        date: "Aug 2023 - Current",
        points: [
            "I intialially joined Blume Global which then got acquired by Wisetech.",
            "So here in Blume I work in visiblity team under Track and Trace division. Visiblity team is behind one of our flagship product BlumeMaps.",
            "I generally work with React and Spring Boot, with a bit other development instruments like kubernates, docker, Git and github. ",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Consultadd",
        icon: consultadd,
        iconBg: "#FAA0A0",
        textBg: "#fce1e1",
        date: "Jan 2023 - May 2023",
        points: [
            "So, basically Consultadd is a consulting company.",
            "BUT, there's a catch!",
            "I was part of their in-house product development team, where I worked on a Client Tracking Application project, in the frontend team.",
            "I worked particularly with React improving the UI and UX of the application, and thereby improving user experience.",
            "I also improved the perfonce of the application by optimizing the search bar's, by implemnting of debouncing and throttling."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Kavish1802',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/kavishgupta2011',
    }
];

export const projects = [
    {
        iconUrl: camp1,
        theme: 'btn-back-red',
        name: 'The Glamping Grove',
        description: 'Developed a landing page for a Resort Named "The Glamping Grove" using Reactjs and Threejs, with beautiful designs and functional elements. This was a freelance project, currently deployed on vercel. PS: The Resort under construction, so is website.',
        link: 'https://resort-website-kavish1802.vercel.app',
    },
    {
        iconUrl: cosmetology,
        theme: 'btn-back-yellow',
        name: 'Cometology Website',
        description: 'Delivered a freelance project for a local cosmetology clinic in my hometown, was made using wordpress and deployed on hostinger. Has good intuitive UI and appointment scheduling system.',
        link: 'https://enchantingskinaesthetics.com/',
    }
];