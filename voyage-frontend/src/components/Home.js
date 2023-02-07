import { useState } from 'react';

import SignUpModal from './SignUpLoginModal/SignUpModal';

const Home = () => {
  const [displaySignUpModal, setDisplaySignUpModal] = useState(false);

  const renderSignUpModalHandler = () => {
    setDisplaySignUpModal(true);
  };

  const closeSignUpModalHandler = () => {
    setDisplaySignUpModal(false);
  };

  return (
    <div className="home">
      <p>PLAN YOUR NEXT DESTINATION</p>
      <h1>VOYAGE</h1>
      <button onClick={renderSignUpModalHandler}>LET'S PLAN</button>

      {displaySignUpModal && (
        <SignUpModal onModalClose={closeSignUpModalHandler} />
      )}
    </div>
  );
};

export default Home;
