import './Banner2.css';
import {data} from '../data.js';
import React from 'react';
import {FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

function Banner2() {

const [allOffers] = React.useState(data.offers);

const handleRandomOffers = () =>{
  const temp = [...allOffers]; 
  let length = allOffers.length;
  for(let i = 0; i < 3; i++){
     let index = Math.floor(Math.random() * length);
     temp.splice(index,1);
     length--;
  } 
  return temp;
}

const [currentOffers] = React.useState(handleRandomOffers());
const [index, setIndex] = React.useState(0);

const handleSetIndex = () =>{
  if(index >= 0 && index < 2) setIndex(index+1);
  else setIndex(0);
}

React.useEffect(()=>{ 
    let timer =  setTimeout(()=>handleSetIndex(), 3000);
    return () => {
        clearTimeout(timer);
      };
    }, 
    [index]);

return (
    <div className="component">
      {
        <div className="content" key={currentOffers[index].name}>
            <div className="close"><FontAwesomeIcon className="icon" icon={faWindowClose} /></div>
            <div className="image">
                <img src={currentOffers[index].imgURL} alt={currentOffers[index].name}></img>
            </div>
            <p className="name">{currentOffers[index].name}</p>
            <p className="cost">{parseFloat(currentOffers[index].price).toFixed(2)} zł</p>
            <button>Check</button>
        </div>
      }


      <div className="logo">
        <img src="logo_rtb.png"></img>
      </div>
    </div>
  );
}

export default Banner2;
