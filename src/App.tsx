import myPic from './assets/me.jpg'
import Header from './components/Header';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import { workExperience, certifications } from './data/resume';

import './App.css'

function App() {

  return (
    <div className="App">

      <div className="no-print buttons-wrapper">
        <button className='button' onClick={print}>Print</button>
        <a className='button' href="/HeatherEngleResume2023.pdf" target='_blank' title="Download PDF of my resume">Download PDF</a>
      </div>

       <Header pic={myPic} />
        
        <main>
            <h2>Experience</h2>
          {workExperience.map((job, index: number) => {
            return (
              <Experience
                key={index}
                title={job.title}
                company={job.company}
                location={job.location}
                dates={job.dates}
                description={job.description}
                skills={job.skills}
              />
            )
          })
        }


          <h2 style={{pageBreakBefore: 'always'}}>Education</h2>
          <Experience 
              title="B.A. Graphic/Information Design"
              company="Central Connecticut State University"
              location="New Britain, CT"
              dates="2004 - 2008" />

          <h2>Certifications</h2>
            {certifications.map((cert, index: number) => {
              return (
                <Certifications
                  key={index}
                  title={cert.title}
                  source={cert.source}
                  date={cert.date}
                  description={cert.description}
                />
              )
            })
          }

        </main>
       
    </div>
  )
}

export default App
