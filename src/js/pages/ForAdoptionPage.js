import '../../scss/pages/ForAdoptionPage.scss';
import React, { useState, useEffect } from 'react';
import Routes from "../routes";
import { useHistory } from "react-router-dom";
import { push } from 'connected-react-router';
import Card from '../components/Card';
import Header from '../components/Header';
import { DOG_DETAILS_PAGE_ROUTE } from '../routes';
import { FOR_ADOPTION_PAGE_ROUTE } from '../routes';

const ForAdoptionPage = () => {
  const history = useHistory();
  const [dogData, setDogData] = useState([]);
  const [expandDogData, setExpandDogData] = useState(false);

  const goToDogDetails = () => history.push(`${DOG_DETAILS_PAGE_ROUTE}`);

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
    <div className="ForAdoptionPage">
      <Header/>
      <div className="ForAdoptionPage-body">
        <p className="ForAdoptionPage-body-title">Para adoção</p>
        {
          dogData 
          && dogData.map((dog) => (
            <div onClick={() => goToDogDetails(dog.id)}>
              <Card
                key={dog.id}
                props={dog}
                expandCard={expandDogData}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ForAdoptionPage;
