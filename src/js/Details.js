import returnArrow from '../assets/arrow.svg';
import '../scss/App.scss';
import React, { useState, useEffect } from 'react';
import shop from '../assets/shop.svg';
import Card from './components/Card';

const App = () => {
  const [dogData, setDogData] = useState([]);
  const [expandDogData, setExpandDogData] = useState(false);

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
    <div className="App">
      <div className="App-header">

        <img src={returnArrow} className="App-navbar-icons arrow" alt="logo" />

        <div className="App-title">
          <span>DOG</span>
          <span className="bold">HUB</span>
        </div>

        <img src={shop} className="App-navbar-icons" alt="logo" />
 
      </div>
      <div className="App-body">
        <p className="App-body-title">Para adoção</p>
        {
          dogData 
          && dogData.map((e) => (
            <div onClick={() => setExpandDogData(!expandDogData)}>
              <Card
                key={e.id}
                props={e}
                expandDogData
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
