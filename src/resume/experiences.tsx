import * as React from 'react'
import * as styles from './experiences.css'

class Experience extends React.Component<{
  date: string
  name: string
  title: string
  location: string
}> {
  render() {
    const { date, name, title, children, location } = this.props
    return (
      <div className={styles.experience}>
        <h3>
          {name} <span className={styles.experienceLocation}>- <span className={styles.location}>{location}</span> - <span className={styles.date}>{date}</span></span>
        </h3>
        <div className={styles.experienceTitle}>{title}</div>
        <div className={styles.experienceDescription}>{children}</div>
      </div>
    )
  }
}

export class Experiences extends React.Component {
  render() {
    return (
      <div className={styles.experiences}>
        <h2>Work Experience</h2>
        <Experience
          name="Wiley"
          date="2019"
          title="Lead Software Engineer"
          location="New Jersey"
        >
          <ul>
            <li>Lead a team. Organized sprints, 1:1s, Roadmap planning.</li>
            <li>Worked on a complex frontend web app (React, Redux, GraphQL, TypeScript).</li>
            <li>Contributed to many backend services (Java, Python, NodeJS).</li>
            <li>Built tools and libraries to simplify our codebase and processes.</li>
            <li>
              Supported a complex architecture of micro services (Kubernetes, Docker, AWS,
              MySQL, PostgreSQL, Cassandra, Kafka, Vault, S3, Eureka, ..).
            </li>
          </ul>
        </Experience>
        <Experience
          name="Knewton"
          date="2014"
          title="Senior Software Engineer"
          location="New York"
        >
          <ul>
            <li>Lead a team. Organized sprints, 1:1s, Roadmap planning.</li>
            <li>Worked on a complex frontend web app (React, Redux, GraphQL, TypeScript).</li>
            <li>Contributed to many backend services (Java, Python, NodeJS).</li>
            <li>
              Supported a complex architecture of micro services (Mesos, Marathon, Docker, AWS,
              MySQL, PostgreSQL, Cassandra, Kafka, Vault, S3, Eureka, ..).
            </li>
          </ul>
        </Experience>
        <Experience name="Kikin" date="2010" title="Software Engineer" location="New York">
          <ul>
            <li>Created two apps for iPad/iPhone (Objective C).</li>
            <li>Modified Android's source code (Java). Shipped on 200K+ devices.</li>
            <li>Developed Chrome/IE/Firefox extensions (JavaScript).</li>
          </ul>
        </Experience>
        <Experience
          name="Veodia"
          date="2009"
          title="Software Engineer"
          location="San Francisco"
        >
          <ul>
            <li>Developed a website frontend and backend (PHP).</li>
            <li>
              Worked on video compression algorithms (C++), a cross-platform native Java library
              (JNI), video conversion/encoding.
            </li>
          </ul>
        </Experience>
        <Experience name="ScreenToaster" date="2008" title="Web 2.0 Engineer" location="Paris">
          <ul>
            <li>Worked on the website's frontend and backend (PHP).</li>
            <li>Created an online screen recorder using VNCServer and Ffmpeg (Java/C++).</li>
          </ul>
        </Experience>
        <Experience name="Infotel" date="2007" title="Consultant" location="Paris">
          <ul>
            <li>Microsoft .NET Consultant (C# / .Net Framework / ASP), Authenticode signing, Vista compatibility.</li>
            <li>Development of two web applications using J2EE with Struts Framework and a SOAP (WSDL) service using AXIS.</li>
          </ul>
        </Experience>
      </div>
    )
  }
}
