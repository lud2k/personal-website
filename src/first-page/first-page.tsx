import * as React from 'react'
import * as styles from './first-page.css'
import { Triangles } from './triangles'
import { Background } from './background'
import { Welcome } from './welcome'

export class Cut extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.cut}>
        <polygon points="0,0 0,100 100,100" fill="#ffffff" />
      </svg>
    )
  }
}

export class FirstPage extends React.Component {
  render() {
    return (
      <div className={styles.firstPage}>
        <Background />
        <Triangles />
        <Welcome />
        <Cut />
        <div className={styles.downArrow}>&#8964;</div>
      </div>
    )
  }
}
