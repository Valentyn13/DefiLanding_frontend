import "./Modal.css"
const Modal = ({active, children}) => {
  return (
    <div className={active ? 'modal modal-active' : 'modal'}>
        <div className={active ? 'modal-content modal-content-active' : 'modal-content'}>
            {children}
        </div>
    </div>
  )
}

export default Modal