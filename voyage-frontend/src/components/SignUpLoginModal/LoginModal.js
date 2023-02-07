import { useState } from 'react';
import SignUpModal from './SignUpModal';
import Modal from '../UI/Modal';

import './SignUpLoginModal.scss';

const LogInModal = (props) => {
  const closeLoginModalHandler = () => {
    props.onModalClose();
  };

  const [displaySignUpModal, setDisplaySignUpModal] = useState(false);

  const renderSignUpModalHandler = () => {
    setDisplaySignUpModal(true);
  };

  const closeSignUpModalHandler = () => {
    setDisplaySignUpModal(false);
    props.onModalClose();
  };

  if (displaySignUpModal) {
    return <SignUpModal onModalClose={closeSignUpModalHandler} />;
  } else {
    return (
      <Modal id="Login-Modal">
        <span
          class="material-symbols-outlined"
          onClick={closeLoginModalHandler}
        >
          close
        </span>
        <nav>
          <ul>
            <li onClick={renderSignUpModalHandler}>SIGN UP</li>
            <li>LOGIN</li>
          </ul>
        </nav>

        <form>
          <label>EMAIL:</label>
          <input type="text" />

          <label>PASSWORD:</label>
          <input type="password" />

          <button className="button-80">LOG IN</button>
        </form>
      </Modal>
    );
  }
};

export default LogInModal;
