import '../../scss/pages/ForAdoptionPage.scss';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Card from '../components/Card';
import Header from '../components/Header';
import { DOG_DETAILS_PAGE_ROUTE } from '../routes';

const ForAdoptionPage = () => {
  const history = useHistory();
  const [dogData, setDogData] = useState([]);
  const [expandDogData, setExpandDogData] = useState(false);

  const goToDogDetails = (id) => history.push(`${DOG_DETAILS_PAGE_ROUTE}?=${id}`);

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
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ForAdoptionPage;
