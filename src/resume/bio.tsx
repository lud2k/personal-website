import * as React from 'react'
import * as styles from './bio.css'
import * as globalStyles from './global.css'
import classnames from 'classnames'
 
export class Bio extends React.Component {

  protect(text: string): any[] {
    const ret = []
    while (text) {
      const part = text.substr(0, 6)
      ret.push(<><span>{part}</span><span className={styles.special}> </span></>)
      text = text.substr(6)
    }
    return ret;
  }

  render() {
    const email = 'bHVkb3ZpYy5jYWJyZUBnbWFpbC5jb20='
    const phone = 'NDE1LTM1MS05Mzkx'

    return (
      <div className={styles.bio}>
        <h2>Bio</h2>
        <div className={styles.bioItem}>
          <b>Nationality</b>: France
        </div>
        <div className={styles.bioItem}>
          <b>Home</b>: New York City
        </div>
        <div className={styles.bioItem}>
          <b>Work</b>: USA (Green Card), France
          <span className={globalStyles.hidePrint}>{' '}and Taiwan</span>
        </div>
        <div className={styles.bioItem}>
          <b>Email</b>: {this.protect(atob(email))}
        </div>
        <div className={styles.bioItem}>
          <b>Phone</b>: {this.protect(atob(phone))}
        </div>
        <div className={classnames(styles.bioItem, globalStyles.onlyPrintBlock)}>
          <b>Website</b>: ludovic.cabre.me
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
