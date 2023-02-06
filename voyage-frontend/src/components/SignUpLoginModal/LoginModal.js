import React from 'react'

import Modal from '../UI/Modal'

const LogInModal = () => {
  return (
    <Modal className='modal' id='Login-Modal'>
      <nav>
        <ul>
          <li>SIGN UP</li>
          <li>LOGIN</li>
        </ul>
      </nav>

      <form>
        <label>EMAIL:</label>
        <input type="text" />

        <label>PASSWORD:</label>
        <input type="password" />
      </form>
    </Modal>
  )
}

export default LogInModal