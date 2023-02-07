import './Modal.scss'

const Modal = (props) => {
  const classes = 'modal ' + (props.className? props.className : '')

  return (
    <div className={classes} id={props.id}>
      {props.children}
    </div>
  )
}

export default Modal