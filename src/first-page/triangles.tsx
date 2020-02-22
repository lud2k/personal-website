import * as React from 'react'
import * as styles from './triangles.css'

export class Triangle extends React.Component<{
  x: number
  y: number
  angle: number
  size: number
  color: string
}> {
  render() {
    const { x, y, angle, size, color } = this.props
    const height = size / 1.15
    const halfHeight = height / 2
    const halfWidth = size / 2
    const points = [[-halfWidth, -height / 2], [halfWidth, -halfHeight], [0, halfHeight]]
    const transform = `translate(${x} ${y}) rotate(${angle})`
    return (
      <g transform={transform}>
        <polygon
          points={points.map(p => p.join(',')).join(' ')}
          className={styles.triangle}
          fill={color}
        />
      </g>
    )
  }
}

export class Triangles extends React.Component {
  renderTriangles() {
    const ret = []
    const maxWidth = 1700
    const maxHeight = 1200
    const sizes = [400, 200, 100]
    const colors = {
      400: "rgba(61,64,91,0.05)",
      100: "rgba(255,202,175,0.15)",
      200: "rgba(167,190,211,0.15)",
    }

    sizes.forEach(size => {
      for (let i = 0; i < 30; i++) {
        ret.push(
          <Triangle
            x={Math.random() * maxWidth}
            y={Math.random() * maxHeight}
            angle={Math.random() * 360}
            size={size}
            color={colors[size]}
          />
        )
      }
    })

    return ret
  }

  render() {
    return (
      <div className={styles.triangles}>
        <svg height="100%" width="100%">
          {this.renderTriangles()}
        </svg>
      </div>
    )
  }
}
