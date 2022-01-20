import './Banner3.css';
import React from 'react';

function Banner3() {

    const currentTime = new Date();
    const endTime = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate()+7));
    
    const [seconds, setSeconds] = React.useState(Math.round((endTime.getTime() - currentTime.getTime())/1000));
  
    const getTimeLeft = () => {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
        const timeLeft = {
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
        };
        return timeLeft;
      }

      React.useEffect(()=>{ 
        let timer =  setTimeout(()=>setSeconds(seconds+1), 1000);
        return () => {
            clearTimeout(timer);
          };
        }, 
        [seconds]);

return (
    <div className="mainContainer">
        <div className="timeLeft">
            Do końca pozostało (DD-HH-MM): <span className="time"> { `${getTimeLeft().days}-${getTimeLeft().hours}-${getTimeLeft().minutes}` } </span>
        </div>
      <div className="logoRtb">
        <img src="logo_rtb.png"></img>
      </div>
    </div>
  );
}

export default Banner3;
