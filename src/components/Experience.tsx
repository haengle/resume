type ExperienceProps = {
    title: string,
    company: string,
    location: string,
    dates: string,
    description?: string[],
    skills?: string[]
}

export default function Experience({title, company, location, dates, description, skills}: ExperienceProps) {

    return (
        <section className="card experience-card">
            <div className="title">
                <h2>{title} <span>{company} - {location}</span></h2>
                <h3>{dates}</h3>
            </div>
            <div className="description">
                <ul>
                    {description && description.map((point, index: number) => {
                        return <li key={index}>{point}</li>
                    })
                    }
                </ul>
            </div>
            {skills &&
            <div className="skills">
                <h4>Skills:</h4>
                <ul>
                   {skills.map((skill, index: number) => {
                        return <li key={index}>{skill}</li>
                    })
                   }
                </ul>
            </div>
            }
        </section>
    )
}