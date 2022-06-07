import '../../scss/components/Card.scss';
import React, { useEffect, useState } from 'react';
import dog6 from '../../assets/images/6.jpg';
import dog16 from '../../assets/images/16.jpg';
import dog81 from '../../assets/images/81.jpg';
import dog121 from '../../assets/images/121.jpg';

const Card = (props) => {
  const {id, name, temperament} = Object.values(props)[0];
  const [dogData, setDogData] = useState([]);

  let img;
  
  if (id === 6){
    img = dog6;
  } else if (id === 16){
    img = dog16;    
  } else if (id === 81){
    img = dog81;    
  } else if (id === 121){
    img = dog121;    
  }

  const dogTemperament = temperament.split(", ");

  useEffect(() => {
    const  loadDoc = () => {
      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          setDogData(JSON.parse(xhttp.responseText));
        }
      };

      xhttp.open("GET", "http://localhost:8000/breeds", true);
      xhttp.send();
    }

    loadDoc();
  }, []);

  return (
      <div className="Card">
        <img src={img} className="Card-image" alt={name} />
        <div className="Card-info">
          <p className="Card-title">
            {name}
          </p>
          <div className="Card-tags">
            {
              dogTemperament.map((dTemp) => (
                <p key={dTemp} className="Card-tag">
                  {dTemp}
                </p>
              ))
            }
          </div>
        </div>

     

      </div>
  );
}

export default Card;
