import React, { useState } from 'react';

import { getDogInfo } from '../utils/getDogInfo';

import Card from '../components/Card';
import Header from '../components/Header';

import '../../scss/pages/DogDetailsPage.scss';

const DogDetailsPage = (props) => {
  const [dogData, setDogData] = useState([]);
  
  let dogId = window.location.search.split("=")[1];

  if (dogData.length <= 0)
    getDogInfo({dogId, setDogData});

  return (
    <div className="DogDetailsPage">
      <Header/>
      <div className="DogDetailsPage-body">
        <p className="DogDetailsPage-body-title">Detalhes</p>
        <Card props={dogData} expandData={true} />
      </div>
    </div>
  );
}

export default DogDetailsPage;
