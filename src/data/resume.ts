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
    "location": "Austin, TX",
    "intro": "I'm a pixel-perfect front end engineer with 10+ years of experience. I focus on user experience & accessibility and have a passion for delivering exceptional digital experiences.",
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
            "title": "Senior Software Engineer II",
            "company": "Array",
            "location": "New York, NY",
            "dates": "Sept 2022 - Feb 2023",
            "description": [
                "Enhanced web component accessibility by introducing automated testing with Playwright and manual testing plans for QA analysts",
                "Built new Svelte web components for customer-facing product initiatives",
                "Collaborated with back end engineers, TPMs, and Product to determine front end requirements for roadmap initiatives" 
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
            "company": "Noodle, Inc",
            "location": "New York, NY",
            "dates": "Jan 2022 - Sept 2022",
            "description": [
                "Identified & implemented UX enhancements and features for enterprise-level CMS using Vue.js",
                "Refined UX & migrated university microsites from legacy systems to up-to-date standards with enhanced features & components",
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
            ]
        },
        {
            "title": "Senior Front End Engineer",
            "company": "Winston Project, LLC",
            "location": "New York, NY",
            "dates": "July 2021 - Dec 2021",
            "description": [
                "Established & implemented front-end component library with cutting edge technologies within 90 days",
                "Managed front-end project setup, design and maintenance to ensure quality and consistency",
                "Constructed high-performance UI components leveraging Alpine JS, Tailwind CSS, and Eleventy",
                "Contributed pivotal role in successful acquisition of Eleven21 by Noodle"
            ],
            "skills": [
                "Vue",
                "Gulp",
                "Eleventy",
                "Nunjucks",
                "Tailwind CSS",
                "PostCSS",
                "Alpine JS",
                "GitHub",
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
    }
]