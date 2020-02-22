import * as React from 'react'
import * as styles from './resume.css'
import { Experiences } from './experiences'
import { Educations } from './educations'
import { Bio } from './bio'
import { Skills } from './skills'

export class Resume extends React.Component {
  render() {
    return (
      <div className={styles.resume}>
        <div className={styles.column}>
          <Experiences />
          <Educations />
        </div>
        <div className={styles.column}>
          <Bio />
          <Skills />
        </div>
      </div>
    )
  }
}
