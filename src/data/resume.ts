interface WorkExperience {
    title: string,
    company: string,
    location: string,
    dates: string,
    description?: string[],
    skills?: string[]
}

interface Certifications {
    title: string,
    source: string,
    date: string,
    description?: string
}

interface Introduction {
    name: string,
    headline: string,
    intro: string,
    location: string,
    links: {
        title: string,
        url: string,
        text: string
    }[]
}

export const introduction: Introduction = {
    "name": "Heather Engle",
    "headline": "Senior UI/UX Front End Engineer",
    "location": "Lexington, KY",
    "intro": "I'm a front end engineer with a proven track record of optimizing UX & enhancing developer workflows. I specialize in accessibility and user experience, & my passion is making pretty things for the web.",
    "links": [
        {
            "title": "Email",
            "url": "mailto:h.a.engle@gmail.com",
            "text": "h.a.engle@gmail.com"
        },
        {
            "title": "Portfolio",
            "url": "http://heatherengle.com",
            "text": "heatherengle.com"
        },
        {
            "title": "GitHub",
            "url": "https://github.com/haengle",
            "text": "github.com/haengle"
        },
        {
            "title": "LinkedIn",
            "url": "https://linkedin.com/in/heatherengle",
            "text": "linkedin.com/in/heatherengle"
        }
    ]
}

export const workExperience: WorkExperience[] = 
    [
        {
            "title": "Senior Frontend Software Engineer",
            "company": "QuinStreet",
            "location": "Austin, TX",
            "dates": "May 2023 - August 2024",
            "description": [
                "Spearheaded initiatives to elevate developer experience, introducing a robust code review process, streamlined code dependency management, and executed comprehensive refactoring of outdated React, Vue, and JS codebases, resulting in increased efficiency and codebase quality.",
                "Demonstrated expertise in working with diverse technologies on high-traffic organic and SEM websites, including React, Vue, Typescript, and Wordpress.",
                "Revamped outdated Gulp build process to Vite and NodeJS, reducing pipeline time by 98%, resulting in a substantial increase in CI/CD efficiency." 
            ],
            "skills": [
                "Node",
                "JSON",
                "PHP",
                "Vue",
                "React",
                "Wordpress",
                "Vite",
                "REST APIs",
                "Bitbucket"
            ]
        },
        {
            "title": "Senior Software Engineer II",
            "company": "Array",
            "location": "New York, NY",
            "dates": "Sept 2022 - Feb 2023",
            "description": [
                "Enhanced web component accessibility by introducing automated testing with Playwright and creating manual testing plans for QA analysts.",
                "Built Svelte/TypeScript web components for new product initiatives.",
                "Collaborated with back end engineers, TPMs, and Product to determine front end requirements for roadmap initiatives.",
                "Conducted thorough testing and troubleshooting of web applications, ensuring high-quality standards and adherence to best practices." 
            ],
            "skills": [
                "Svelte",
                "Playwright",
                "TypeScript",
                "Next.js",
                "React",
                "A11y",
                "SvelteKit",
                "REST APIs",
                "Gitlab"
            ]
        },
        {
            "title": "Senior Front End Engineer",
            "company": "Winston Project / Noodle, Inc",
            "location": "New York, NY",
            "dates": "July 2021 - Sept 2022",
            "description": [
                "Established & implemented front-end component library with cutting edge technologies within 90 days",
                "Managed front-end project setup, design and maintenance to ensure quality and consistency",
                "Constructed high-performance UI components leveraging Alpine JS, Tailwind CSS, and Eleventy",
                "Contributed pivotal role in successful acquisition of Eleven21 by Noodle",
                "Built, tested, and deployed features for enterprise CMS using Vue.js, improving app performance by 15% and reducing code complexity by 20%.",
                "Enhanced UX by migrating microsites from legacy systems to current standards, thus providing a better user experience, while decreasing development time by 50%.",
                "Developed reusable UI components, delivered 2x faster page loading time and improved core web vitals scores.",
            ],
            "skills": [
                "Vue",
                "Gulp",
                "Eleventy",
                "Nunjucks",
                "Tailwind CSS",
                "Alpine JS",
                "GitHub",
                "WordPress",
                "CI/CD",
                "REST APIs",
                "JSON"
            ]
        },
        {
            "title": "Front End Developer I - III",
            "company": "Kasasa, Ltd",
            "location": "Austin, TX",
            "dates": "Feb 2013 - July 2021",
            "description": [
                "Implemented effective solutions for browser compatibility issues and JavaScript errors, resulting in improved website performance and user satisfaction.",
                "Collaborated with Product, UX, SEO, Analytics, and Back End teams to continuously improve Kasasa's CMS and website products, prioritizing the user experience",
                "Refactored front end codebase into Bootstrap, decreasing team development time for site builds by an additional 30%",
                "Lead developer on a special project team tasked with migrating 140+ websites into proprietary CMS, completing corporate goals within 6 months.",
                "Led project to launch sites in new enterprise-level CMS (dotCMS), including writing documentation and working closely with backend developers to determine product requirements",
                "Developed pixel-perfect websites from design mockups into a proprietary CMS using HTML5, CSS, and jQuery/Javascript, responsive web design, SEO & accessibility best practices"
            ],
            "skills": [
                "Javascript (ES6+)",
                "jQuery",
                "PHP",
                "CSS 3",
                "SASS",
                "Bootstrap", "Twig", "Velocity"
            ]
        }
] 

export const certifications: Certifications[] = [
    {
        "title": "Certificate of Completion",
        "source": "React-Tutorial.app",
        "date": "Feb 2023",
        "description": "Modern React 18 with Hooks, Advanced State Management, Context, 3rd party integrations, Routing"
    },
    {
        "title": "The Complete Guide to Advanced React Component Patterns",
        "source": "Udemy",
        "date": "Feb 2023",
        "description": "Higher order components, custom hooks, compound components, props collections, state initializer & reducer patterns"
    },
    {
        "title": "Typescript: The Complete Developer's Guide",
        "source": "Udemy",
        "date": "April 2023",
        "description": "TypeScript, advanced design patterns, Express.js"
    }
]