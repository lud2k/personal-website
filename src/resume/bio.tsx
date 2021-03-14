import * as React from 'react'
import * as styles from './bio.css'
import * as globalStyles from './global.css'
import classnames from 'classnames'
 
export class Bio extends React.Component {
  render() {
    return (
      <div className={styles.bio}>
        <h2>Bio</h2>
        <div className={styles.bioItem}>
          <b>Nationality</b>: France, born in the caribbean
        </div>
        <div className={styles.bioItem}>
          <b>Home</b>: New York City
        </div>
        <div className={styles.bioItem}>
          <b>Work</b>: USA (Green Card), France and Taiwan
        </div>
        <div className={styles.bioItem}>
          <b>Email</b>: ludovic.cabre@gmail.com
        </div>
        <div className={classnames(styles.bioItem, globalStyles.hidePrint)}>
          <b>Links</b>:{' '}
          <a href="https://github.com/lud2k" target="_blank">
            GitHub
          </a>
          ,{' '}
          <a href="https://www.linkedin.com/in/ludoviccabre" target="_blank">
            LinkedIn
          </a>
          ,{' '}
          <a href="https://www.facebook.com/ludovic.cabre" target="_blank">
            Facebook
          </a>
        </div>
      </div>
    )
  }
}
