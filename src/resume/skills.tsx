import * as React from 'react'
import * as styles from './skills.css'

class SkillRow extends React.Component<{ name: string; val: number }> {
  render() {
    const { name, val } = this.props
    return (
      <div className={styles.skillRow}>
        <div className={styles.skillName}>{name}</div>
        <div className={styles.skillBar} data-pct={val * 10} />
      </div>
    )
  }
}

export class Star extends React.Component<{ val: number }> {
  static coords = [
    [38.042, 65.0],
    [61.553, 72.361],
    [61.818, 47.725],
    [76.084, 27.639],
    [52.737, 19.775],
    [38.042, 0.0],
    [23.347, 19.775],
    [0.0, 27.639],
    [14.266, 47.725],
    [14.531, 72.361],
    [38.042, 65.0],
  ]

  makePath() {
    return Star.coords
      .map((v, i) => {
        const start = i == 0 ? 'M ' : 'L '
        return start + v.map(c => c * 0.3).join(' ')
      })
      .join('\n')
  }

  render() {
    const { val } = this.props
    const h = Math.max((val * 24) / 5, 7)
    return (
      <div className={styles.star}>
        <svg>
          <defs>
            <clipPath id="cut-off">
              <path fill="none" strokeWidth={1} stroke="#444" d={this.makePath()} />
            </clipPath>
          </defs>
          <rect
            x="0"
            y={24 - h}
            width="24"
            height={h}
            className={styles.starRect}
            clip-path="url(#cut-off)"
          />
          <path fill="none" strokeWidth={1} stroke="#444" d={this.makePath()} />
        </svg>
      </div>
    )
  }
}

class Heart extends React.Component<{ val: number }> {
  static coords = [[18, 1], [12, 5], [6, 1], [0, 6], [0, 13], [12, 23], [24, 13], [24, 6], [18, 1]]

  makePath() {
    return Heart.coords
      .map((v, i) => {
        const start = i == 0 ? 'M ' : 'L '
        return start + (v[0] * 0.8 + 1) + ' ' + (v[1] * 0.85 + 1)
      })
      .join('\n')
  }

  render() {
    const { val } = this.props
    const h = Math.max((val * 24) / 5, 7)
    return (
      <div className={styles.star}>
        <svg>
          <defs>
            <clipPath id="cut-off-star">
              <path fill="none" strokeWidth={1} stroke="#444" d={this.makePath()} />
            </clipPath>
          </defs>
          <rect
            x="0"
            y={24 - h}
            width="24"
            height={h}
            className={styles.heartRect}
            clip-path="url(#cut-off-star)"
          />
          <path fill="none" strokeWidth={1} stroke="#444" d={this.makePath()} />
        </svg>
      </div>
    )
  }
}

class SkillStar extends React.Component<{ name: string; know: number; love: boolean }> {
  render() {
    const { name, know, love } = this.props
    return (
      <div className={styles.skillStar}>
        {love ? <Heart val={know} /> : <Star val={know} />}
        <div className={styles.skillStarName}>{name}</div>
      </div>
    )
  }
}

export class Skills extends React.Component {
  render() {
    return (
      <div className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skill}>
          <h3>Language</h3>
          <SkillRow name="French" val={10} />
          <SkillRow name="English" val={10} />
          <SkillRow name="Mandarin" val={1} />
        </div>
        <div className={styles.skill}>
          <h3>Programming</h3>
          <SkillRow name="JavaScript" val={10} />
          <SkillRow name="Java" val={10} />
          <SkillRow name="Python" val={9} />
          <SkillRow name="Objective C" val={3} />
          <SkillRow name="C / C++" val={4} />
          <SkillRow name="PHP" val={2} />
          <SkillRow name="C#" val={1} />
        </div>
        <div className={styles.skill}>
          <h3>Frontend</h3>
          <div className={styles.skillStarList}>
            <SkillStar name="React" love={true} know={5} />
            <SkillStar name="Angular" love={false} know={5} />
            <SkillStar name="Redux" love={true} know={5} />
            <SkillStar name="GraphQL" love={true} know={5} />
            <SkillStar name="ExpressJS" love={false} know={5} />
            <SkillStar name="Webpack" love={false} know={5} />
            <SkillStar name="TypeScript" love={true} know={5} />
            <SkillStar name="WebDriverIO" love={true} know={5} />
            <SkillStar name="jQuery" love={false} know={5} />
            <SkillStar name="Mocha" love={true} know={5} />
            <SkillStar name="Sinon" love={false} know={5} />
          </div>
        </div>
        <div className={styles.skill}>
          <h3>Backend</h3>
          <div className={styles.skillStarList}>
            <SkillStar name="Jersey" love={true} know={5} />
            <SkillStar name="Thrift" love={false} know={5} />
            <SkillStar name="MySQL" love={false} know={5} />
            <SkillStar name="PostgreSQL" love={true} know={5} />
            <SkillStar name="Redis" love={false} know={5} />
            <SkillStar name="Cassandra" love={false} know={2} />
            <SkillStar name="ElasticSearch" love={false} know={2} />
            <SkillStar name="SQS" love={false} know={5} />
            <SkillStar name="Kafka" love={false} know={1} />
          </div>
        </div>
        <div className={styles.skill}>
          <h3>Infrastructure</h3>
          <div className={styles.skillStarList}>
            <SkillStar name="Marathon" love={true} know={5} />
            <SkillStar name="Kubernetes" love={true} know={5} />
            <SkillStar name="Docker" love={true} know={4} />
            <SkillStar name="S3" love={false} know={5} />
            <SkillStar name="CloudFront" love={false} know={5} />
            <SkillStar name="Lambda" love={false} know={3} />
            <SkillStar name="Jenkins" love={false} know={5} />
            <SkillStar name="CI/CD" love={true} know={5} />
            <SkillStar name="Selenium" love={false} know={5} />
            <SkillStar name="Nginx" love={false} know={3} />
            <SkillStar name="Eureka" love={false} know={5} />
            <SkillStar name="Consul" love={false} know={4} />
            <SkillStar name="Vault" love={false} know={4} />
            <SkillStar name="Splunk" love={false} know={5} />
            <SkillStar name="Grafana" love={true} know={5} />
          </div>
        </div>
        <div className={styles.skill}>
          <h3>Other</h3>
          <div className={styles.skillStarList}>
            <SkillStar name="OpenGL" love={false} know={1} />
            <SkillStar name="WebGL" love={true} know={1} />
            <SkillStar name="WebAssembly" love={false} know={1} />
            <SkillStar name="Ionic" love={false} know={1} />
          </div>
        </div>
      </div>
    )
  }
}
