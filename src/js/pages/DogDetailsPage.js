import '../../scss/pages/ForAdoptionPage.scss';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';

const DogDetailsPage = (props) => {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    console.log('detalhes');
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
    <div className="DogDetailsPage">
      <Header/>
      <div className="App-body">
        <p className="App-body-title">Detalhes</p>
       
      </div>
    </div>
  );
}

export default DogDetailsPage;
