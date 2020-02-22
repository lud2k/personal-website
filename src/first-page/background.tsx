import * as React from 'react'
import * as styles from './background.css'

export class Background extends React.Component {
  renderLine() {
    const ret = []
    for (let i = 0; i < 30; i++) {
      ret.push(':) ^^ :D >> :o ++ :/ << :| ; ')
    }
    return ret.join(' ')
  }

  renderLines() {
    const lines = []
    const line = this.renderLine()
    for (let i = 0; i < 100; i++) {
      lines.push(
        <div className={styles.line}>
          {line}
        </div>
      )
    }
    return lines
  }

  render() {
    return <div className={styles.background}>{this.renderLines()}</div>
  }
}
