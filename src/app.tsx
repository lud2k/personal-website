import * as styles from './app.css'
import * as React from 'react'
import { FirstPage } from './first-page/first-page'
import { Resume } from './resume/resume'
import { Projects } from './projects/projects'

export class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <FirstPage />
        <Resume />
        <Projects />
      </div>
    )
  }
}
