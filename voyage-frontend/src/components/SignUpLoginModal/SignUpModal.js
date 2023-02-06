import React from 'react'

import Modal from '../UI/Modal'



const SignUpModal = (props) => {
  const closeSignUpModalHandler = () => {
    props.onModalClose()
  }

  return (
    <Modal className='modal' id='SignUp-Modal'>
      <span onClick={closeSignUpModalHandler}>CLOSE</span>
      <nav>
        <ul>
          <li>SIGN UP</li>
          <li>LOGIN</li>
        </ul>
      </nav>

      <form>
        <label>NAME:</label>
        <input type="text" />

        <label>EMAIL:</label>
        <input type="text" />

        <label>PASSWORD:</label>
        <input type="password" />
      </form>
    </Modal>
  )
}

export default SignUpModal