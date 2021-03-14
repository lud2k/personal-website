import * as React from 'react'
import classnames from 'classnames'
import * as styles from './educations.css'

class Education extends React.Component<{
  date: string
  name: string
  title: string
  location: string
}> {
  render() {
    const { date, name, title, location } = this.props
    return (
      <div className={styles.education}>
        <h3>
          {name} <span className={styles.educationLocation}>- {location} - {date}</span>
        </h3>
        <div className={styles.educationTitle}>{title}</div>
      </div>
    )
  }
}

export class Educations extends React.Component<{ className: string }> {
  render() {
    const { className } = this.props
    return (
      <div className={classnames(styles.educations, className)}>
        <h2>Education</h2>
        <Education
          name="Efrei"
          date="2003"
          title="Master degree in Information Technology and Management."
          location="Paris"
        />
        <Education
          name="Versailles"
          date="2000"
          title="A-Levels in Physics."
          location="Guadeloupe"
        />
      </div>
    )
  }
}
