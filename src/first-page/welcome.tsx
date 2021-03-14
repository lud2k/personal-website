import * as React from 'react'
import * as styles from './welcome.css'

export class Introduction extends React.Component<{}, { wordIdx: number }> {
  interval: any

  static WORDS = ['software', 'frontend', '  mobile', ' backend', '  system']

  constructor(props) {
    super(props)
    this.state = { wordIdx: 0 }
  }

  componentDidMount(): void {
    this.interval = setInterval(this.pickWord, 2500)
  }

  componentWillUnmount(): void {
    clearInterval(this.interval)
  }

  pickWord = () => {
    this.setState({ wordIdx: (this.state.wordIdx + 1) % Introduction.WORDS.length })
  }

  renderWord() {
    let word = Introduction.WORDS[this.state.wordIdx]
    let firstLetter = true
    const letters = []
    for (let i = 0; i < 8; i++) {
      const chars = []
      for (let i = 0; i < 26; i++) {
        chars.push(
          <div className={styles.introductionChar} style={{ top: i * 48 }}>
            {String.fromCharCode(97 + i)}
          </div>
        )
      }

      const top = (97 - word.charCodeAt(i)) * 48
      letters.push(
        <div
          className={styles.introductionCharsWrapper}
          data-first={firstLetter}
          data-hidden={word[i] === ' '}
        >
          <div className={styles.introductionChars} style={{ top }}>
            <div>{word[i] === ' ' ? 'a' : word[i]}</div>
            {chars}
          </div>
        </div>
      )

      if (firstLetter && word[i] !== ' ') {
        firstLetter = false
      }
    }
    return <div className={styles.word}>{letters}</div>
  }

  render() {
    return (
      <div className={styles.introduction}>
        {this.renderWord()} <div className={styles.engineer}>Engineer</div>
      </div>
    )
  }
}

export class Name extends React.Component {
  render() {
    return (
      <div className={styles.name}>
        <span className={styles.firstName}>Ludovic</span>
        <span className={styles.lastName}>Cabre</span>
      </div>
    )
  }
}

export class Welcome extends React.Component {
  render() {
    return (
      <div className={styles.welcome}>
        <Name />
        <Introduction />
      </div>
    )
  }
}
