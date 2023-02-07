import { useState } from 'react';
import LoginModal from './LoginModal';
import Modal from '../UI/Modal';

import './SignUpLoginModal.scss';

const SignUpModal = (props) => {
  const closeSignUpModalHandler = () => {
    props.onModalClose();
  };

  const [displayLoginModal, setDisplayLoginModal] = useState(false);

  const renderLoginModalHandler = () => {
    setDisplayLoginModal(true);
  };

  const closeLoginModalHandler = () => {
    setDisplayLoginModal(false);
    props.onModalClose();
  };

  if (displayLoginModal) {
    return <LoginModal onModalClose={closeLoginModalHandler} />;
  } else {
    return (
      <Modal id="SignUp-Modal">
        <span
          class="material-symbols-outlined"
          onClick={closeSignUpModalHandler}
        >
          close
        </span>
        <nav>
          <ul>
            <li>SIGN UP</li>
            <li onClick={renderLoginModalHandler}>LOGIN</li>
          </ul>
        </nav>

        <form>
          <label>NAME:</label>
          <input type="text" />

          <label>EMAIL:</label>
          <input type="text" />

          <label>PASSWORD:</label>
          <input type="password" />

          <button className="button-80">SIGN UP</button>
        </form>
      </Modal>
    );
  }
};

export default SignUpModal;
