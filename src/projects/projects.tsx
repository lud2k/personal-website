import * as React from 'react'
import * as styles from './projects.css'
import ScreenToasterImage from '../images/screentoaster.jpg'
import ColibriImage from '../images/colibri.png'
import KikinChromeImage from '../images/kikin-chrome.png'
import ScreenJellyImage from '../images/screenjelly.jpg'
import KikinAndroidImage from '../images/kikin-android-tablet2.png'
import KnewtonAltaImage from '../images/knewton-alta.png'
import KnewtonLightImage from '../images/knewton-light.png'
import KnewtonProfileImage from '../images/knewton-profile.png'
import CodeReviewStatsImage from '../images/code-review-stats.png'
import GameStatsImage from '../images/game-stats.png'
import RilaImage from '../images/rila.png'
import Chat3dImage from '../images/chat-3d.jpg'
import { Modal } from './modal'

export class Project extends React.Component<
  {
    name: string
    img: string
    tags: string[]
    year: number
    summary: string
    gray?: number
  },
  { active: boolean }
> {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  onClick = () => {
    this.setState({
      active: true,
    })
  }

  onClickClose = e => {
    e.stopPropagation()
    this.setState({
      active: false,
    })
  }

  render() {
    const { active } = this.state
    const { name, img, year, summary, gray, children } = this.props
    return (
      <div className={styles.project} onClick={this.onClick}>
        <div className={styles.image}>
          <img src={img} style={{ filter: `grayscale(${gray}%)` }} />
        </div>
        <div className={styles.left}>
          <h3>
            {name} <span className={styles.year}>- {year}</span>
          </h3>
          <div className={styles.summary}>{summary}</div>
        </div>
        <Modal img={img} visible={active} name={name} year={year} onClickClose={this.onClickClose}>
          {children}
        </Modal>
      </div>
    )
  }
}

export class Projects extends React.Component<{}, { selection: number | null }> {
  render() {
    return (
      <div className={styles.projects}>
        <h2>Projects</h2>
        <h3>Work</h3>
        <div className={styles.list}>
          <Project
            name="Knewton Alta"
            img={KnewtonAltaImage}
            tags={['React', 'GraphQL']}
            gray={30}
            year={2017}
            summary="Adaptive learning web application for higher education."
          >
            <p>Alta is Knewton's adaptive learning product.</p>
            <p>
              It's a fully featured learning platform allowing teachers to create assignments
              (either adaptive or test) and assign them to their students. More than 50K students
              are actively learning every week.
            </p>
            <p>
              The application is built using the latest frontend technologies (React, Redux,
              GraphQL, CSS Modules, TypeScript, NodeJS). It is powered by a complex system of micro
              services (Java, Python, NodeJS) using many different database (PostgreSQL, Cassandra,
              ...) deeply integrated with AWS services (SQS, Kinesis, S3, Elasticsearch). All
              services are packaged as docker containers deployed to production automatically
              (CI/CD).
            </p>
          </Project>
          <Project
            name="Knewton Light"
            img={KnewtonLightImage}
            tags={['AngularJS', 'JAX-RX']}
            gray={30}
            year={2015}
            summary="Demo integration of Knewton for showcasing adaptivity to partners."
          >
            <p>
              This was a demo application for sales to showcase Knewton's adaptive learning
              technology. It was also used by partners to better understand how the API works. It
              provided them with simple sample code that they could copy/paste.
            </p>
            <p>
              The application was built using AngularJS for the frontend. It was powered by a JAVA
              backend (Jersey, Jackson, Jdbi, PostgreSQL, Liquibase, ...).
            </p>
          </Project>
          <Project
            name="Knewton Profile"
            img={KnewtonProfileImage}
            tags={['jQuery', 'DropWizard']}
            gray={30}
            year={2014}
            summary="Knewton's cross partner universal student profile."
          >
            <p>
              Universal Knewton student profile. The ambitious project allowed students to see their
              activity, proficiency and analytics across all of Knewton's partners. Unfortunately
              partners did not want to use this service and it eventually died.
            </p>
            <p>
              The frontend was built using good old jQuery. It was powered by a JAVA backend
              (Jersey, Jackson, Jdbi, PostgreSQL, Liquibase, ...).
            </p>
          </Project>
          <Project
            name="Colibri iOS"
            img={ColibriImage}
            tags={['Objective C', 'iOS Universal']}
            gray={30}
            year={2012}
            summary="iOS Browser featuring Kikin's contextual search technology."
          >
            <p>
              Colibri was an iOS browser featuring Kikin's long press to search technology and
              innovative gestures for navigation. Users would be able to select any text in the
              browser and get contextual results.
            </p>
            <p>
              This native application was built to work on both iPad and iPhone. The code was
              written in Objective C (before Swift came).
            </p>
          </Project>
          <Project
            name="Kikin Android"
            img={KikinAndroidImage}
            tags={['Android', 'Java', 'C++']}
            gray={30}
            year={2011}
            summary="Android modification enabling Kikin's touch to search in all apps."
          >
            <p>
              The Android source code was modified so that Kikin's touch to search technology could
              be used in ANY application. The changes were integrated by HTC, Lenovo and Samsung and
              shipped to 200K+ devices (tablets and phones).
            </p>
            <p>
              The application was built as a standard android app (Java, APK). Changes to the
              Android source code were kept to a minimum so that most of the work was done in the
              app.
            </p>
          </Project>
          <Project
            name="Kikin Chrome"
            img={KikinChromeImage}
            tags={['Chrome Extension', 'JavaScript']}
            gray={30}
            year={2013}
            summary="Chrome Extension enabling long click to search in all pages."
          >
            <p>
              This chrome extension allowed suers to long click to search in any website. Search
              results were powered by Kikin's contextual search technology.
            </p>
            <p>The chrome extension was built in JavaScript using jQuery.</p>
          </Project>
          <Project
            name="ScreenJelly"
            img={ScreenJellyImage}
            tags={['jQuery', 'PHP', 'MySQL']}
            gray={30}
            year={2009}
            summary="Second version of ScreenToaster."
          >
            <p>
              Zero install online screen recorder. The goal of the project was to make screen
              recording as simple as possible so that anybody could use it.
            </p>
            <p>
              The website was using good old LAMP (Linux, Apache, MySQL and PHP). The frontend was
              mostly backend rendered with some bits of jQuery. The screen recorder was built in C++
              and launched by a Java Applet.
            </p>
          </Project>
          <Project
            name="ScreenToaster"
            img={ScreenToasterImage}
            tags={['jQuery', 'PHP', 'MySQL']}
            gray={60}
            year={2008}
            summary="Zero install, very easy to use online screen recorder."
          >
            <p>
              Zero install online screen recorder. The goal of the project was to make screen
              recording as simple as possible so that anybody could use it.
            </p>
            <p>
              The website was using good old LAMP (Linux, Apache, MySQL and PHP). The frontend was
              mostly backend rendered with some bits of jQuery. The screen recorder was built in C++
              and launched by a Java Applet.
            </p>
          </Project>
          <Project
            name="Rila"
            img={RilaImage}
            tags={['jQuery', 'PHP', 'MySQL']}
            gray={60}
            year={2007}
            summary="Rila provides a range of products and services in healthcare."
          >
            <p>
              Rila provides a range of products and services in healthcare. They have many websites
              that were all using different user databases. They wanted to consolidate user data so
              that they could use the same login and password on all websites.
            </p>
            <p>
              The websites were all built in PHP using an open source CMS. The databases were all
              MySQL. My mission was to create a new user database and make all the websites use it.
            </p>
          </Project>
        </div>
        <h3>Fun</h3>
        <div className={styles.list}>
          <Project
            name="Code Review Stats"
            img={CodeReviewStatsImage}
            tags={['React', 'Gerrit']}
            gray={40}
            year={2018}
            summary="Tool to generate fun analytics based on Gerrit code reviews."
          >
            <p>
              Open source tool that fetches code review data from Gerrit and generates analytics.
              This is a fun project that is used at Knewton to remind the team that code reviews are
              everybody's responsibility. Helps motivate the team to engage more in code reviews.
            </p>
            <p>
              The tool is open source and available on my GitHub. It was built using React,
              TypeScript, Material UI, NodeJS.
            </p>
          </Project>
          <Project
            name="Game Stats"
            img={GameStatsImage}
            tags={['React', 'Google Sheets']}
            gray={40}
            year={2017}
            summary={'Web app to keep track of game scores and show some stats.'}
          >
            <p>
              Open source tool that makes it easy to track game scores and see statistics. Knewton
              used to have a pool table and ping pong table. This tool was used to keep track of
              scores and see who were the best employees at those sports.
            </p>
            <p>
              The tool is open source and available on my GitHub. It was built using React,
              TypeScript, Material UI, NodeJS. To keep things simple, the data was stored in a
              Google Sheet.
            </p>
          </Project>
          <Project
            name="Chat 3D"
            img={Chat3dImage}
            tags={['OpenGL', 'C++']}
            gray={30}
            year={2008}
            summary="3D virtual reality chat written in C++ using OpenGL."
          >
            <p>
              A long long time ago, I built a virtual 3d chat. This project was used as personal
              project for my finals. Users could customize their avatar, pick a name and join the 3D
              island. They could walk around in the world and chat with each other.
            </p>
            <p>
              Everything was written in C++ and raw OpenGL. The server was running on a dedicated
              server. All 3D models were created by me (clearly lacking design skills).
            </p>
          </Project>
        </div>
      </div>
    )
  }
}
