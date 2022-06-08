import '../../scss/pages/ForAdoptionPage.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Card from '../components/Card';
import Header from '../components/Header';
import { DOG_DETAILS_PAGE_ROUTE } from '../routes';

const ForAdoptionPage = () => {
  const dogs = useSelector((state) => (state.items));

  const history = useHistory();

  const goToDogDetails = (id) => history.push(`${DOG_DETAILS_PAGE_ROUTE}?=${id}`);

  return (
    <div className="ForAdoptionPage">
      <Header/>
      <div className="ForAdoptionPage-body">
        <p className="ForAdoptionPage-body-title">Para adoção</p>
        {
          dogs 
          && dogs.map((dog) => (
            <div key={dog.id} onClick={() => goToDogDetails(dog.id)}>
              <Card
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
