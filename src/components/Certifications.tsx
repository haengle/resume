type CertificationsProps = {
    title: string,
    source: string,
    date: string,
    description?: string
}

export default function Certifications({title, source, date, description}: CertificationsProps) {
    return (
        <section className="card experience-card">
           <div className="title">
                <h2>{title} <span>{source}</span></h2>
                <h3>{date}</h3>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </section>
    )
}