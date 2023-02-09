import React from 'react';

import './Itinerary.scss'
import tshirt from '../../images/clothesIcons/t-shirt.png'
import poloShirt from '../../images/clothesIcons/polo-shirt.png'
import hoodie from '../../images/clothesIcons/hoodie.png'
import trousers from '../../images/clothesIcons/trousers.png'
import jeans from '../../images/clothesIcons/jeans.png'
import shorts from '../../images/clothesIcons/shorts.png'
import trainers from '../../images/clothesIcons/trainers.png'
import flipFlops from '../../images/clothesIcons/flip-flops.png'
import baseballCap from '../../images/clothesIcons/baseball-cap.png'

const Clothes = () => {
  return (
    <div className="Clothes">
      <div className="header">
        <h2>CLOTHES TO PACK</h2>
      </div>

      <div className="content">
        <div className="clothes-grid">
          <img className='img1' src={tshirt} alt="" />
          <img className='img2' src={poloShirt} alt="" />
          <img className='img3' src={hoodie} alt="" />
          <img className='img4' src={trousers} alt="" />
          <img className='img5' src={jeans} alt="" />
          <img className='img6' src={shorts} alt="" />
          <img className='img7' src={trainers} alt="" />
          <img className='img8' src={flipFlops} alt="" />
          <img className='img9' src={baseballCap} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clothes;
