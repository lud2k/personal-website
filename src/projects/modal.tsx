import * as React from 'react'
import * as styles from './modal.css'

export class Modal extends React.Component<{
  img: string
  name: string
  year: number
  visible: boolean
  onClickClose: (e: React.MouseEvent) => void
}> {
  render() {
    const { img, visible, name, children, onClickClose } = this.props
    if (!visible) {
      return null
    }
    return (
      <div className={styles.modal} onClick={onClickClose}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={img} />
          </div>
          <div className={styles.description}>
            <h3>{name}</h3>
            <div>{children}</div>
          </div>
        </div>
      </div>
    )
  }
}
