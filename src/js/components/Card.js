import React from 'react';
import { useSelector } from 'react-redux';

import { getDogImage } from '../utils/getDogImage';

import { addDogOnCart } from '../reducers/CartReducers';

import classnames from 'classnames';


import '../../scss/components/Card.scss';

const Card = (props) => {
  const {expandData} = props;
  const {cart, setCart} = useSelector((state) => state);

  const {
    id,
    name,
    temperament,
    bred_for,
    breed_group,
    height,
    life_span,
    weight
  } = Object.values(props)[0];

  const img = getDogImage(id);

  const dogTemperament = temperament && temperament.split(", ");

  return (
      <div className={
        classnames(
        'Card',
        { 'Card-expanded': expandData },
      )}>
        <img src={img} className="Card-image" alt={name} />
        <div className="Card-info">
          <p className="Card-title">
            {name}
          </p>
          <div className="Card-tags">
            {
              dogTemperament
              && dogTemperament.map((dTemp) => (
                <p key={dTemp} className="Card-tag">
                  {dTemp}
                </p>
              ))
            }
          </div>
          {
            expandData
            && (
              <div className="Card-qualities">
                <div>
                  {
                    bred_for
                    && (
                      <p>- Nascido para: {bred_for}</p>
                    )
                  }
                  {
                    breed_group
                    && (
                      <p>- Ninhada: {breed_group}</p>
                    )
                  }
                  {
                    height
                    && (
                      <div>
                        <p>- Altura:</p>
                        <p className='Card-subqualities'>Imperial: {height.imperial}</p>
                        <p className='Card-subqualities'>Métrica: {height.metric}</p>
                      </div>
                    )
                  }
                  {
                    life_span
                    && (
                      <p>- Estimativa de vida: {life_span}</p>
                    )
                  }
                  {
                    weight
                    && (
                      <div>
                      <p>- Peso:</p>
                      <p className='Card-subqualities'>Imperial: {weight.imperial}</p>
                      <p className='Card-subqualities'>Métrica: {weight.metric}</p>
                      </div>
                    )
                  }
                </div>
                <button className="Card-adoptButton" onClick={() => addDogOnCart({cart, setCart, dogId: id})}>
                  ADOTAR
                </button>
              </div>
            )
          }
        </div>

     

      </div>
  );
}

export default Card;
