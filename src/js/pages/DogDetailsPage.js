import '../../scss/pages/ForAdoptionPage.scss';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';

const DogDetailsPage = (props) => {
  const [dogData, setDogData] = useState([]);
  let dogId = window.location.search.split("=")[1];

  useEffect(() => {
    const  loadDoc = () => {
      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          setDogData(JSON.parse(xhttp.responseText));
        }
      };

      xhttp.open("GET", `http://localhost:8000/dogNumber${dogId}`, true);
      xhttp.send();
    }

    loadDoc();
  }, [dogId])

  if (dogData)
    console.log(dogData);

  return (
    <div className="DogDetailsPage">
      <Header/>
      <div className="ForAdoptionPage-body">
        <p className="ForAdoptionPage-body-title">Detalhes</p>
        <Card props={dogData} expandData={true} />
      </div>
    </div>
  );
}

export default DogDetailsPage;
