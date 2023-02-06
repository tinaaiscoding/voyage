import './Modal.scss'

const Modal = (props) => {
  const classes = 'modal ' + props.className

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Modal