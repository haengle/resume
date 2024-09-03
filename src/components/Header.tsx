import { introduction } from "../data/resume";

type HeaderProps = {
    pic: string
}

export default function Header({pic} : HeaderProps) {
    return (
        <header className="card">
            <div className="thumbnail-border">
                <img src={pic} className="thumbnail" alt="Heather & her horse, Obi" />
            </div>
            <section>
                <h1>{introduction.name}</h1>
                <h2>{introduction.headline} in <em className="tooltip" title={introduction.location}>LEX</em></h2>
                <nav>
                    <ul>
                        {introduction.links.map((link, index: number) => {
                           return <li key={index}>
                                <span>{link.title}</span>
                                <a href={link.url}>{link.text}</a>
                            </li>
                        })}
                    </ul>
                </nav>
                <p className="intro">{introduction.intro}</p>
            </section>
        </header>
    )
}