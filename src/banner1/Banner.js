import './Banner.css';
import {data} from '../data.js';
import React from 'react';

function Banner() {

const [border, setBorder] = React.useState(0);

const [allOffers] = React.useState(data.offers);

const handleRandomOffers = () =>{
  const temp = [...allOffers]; 
  let length = allOffers.length;
  for(let i = 0; i < 2; i++){
     let index = Math.floor(Math.random() * length);
     temp.splice(index,1);
     length--;
  } 
  return temp;
}

const [currentOffers] = React.useState(handleRandomOffers());

const handleSetBorder = () => { 
  if(border >= 0 && border < 3) setBorder(border+1);
  else setBorder(0);
}
React.useEffect(()=>{ 
    let timer =  setTimeout(()=>handleSetBorder(), 2000);
    return () => {
        clearTimeout(timer);
      };
    }, 
    [border]);

const handleAddBorder = (index) =>{ 
  if( index === border) return 'border';
  else return '';
}

return (
    <div className="container">
      {
        currentOffers.map((offer, index) => <div className={`imgContainer + ${handleAddBorder(index)}`} key={offer.name}>
                                     <img src={offer.imgURL} alt={offer.name}></img>
                                     <span className="price">{parseFloat(currentOffers[index].price).toFixed(2)} zł</span>
                                    </div>)
      }
      <div className="logoContainer">
        <img src="logo_rtb.png"></img>
      </div>
    </div>
  );
}

export default Banner;
