import React from 'react';
import { useSelector } from 'react-redux';

import dog6 from '../../assets/images/6.jpg';
import dog16 from '../../assets/images/16.jpg';
import dog81 from '../../assets/images/81.jpg';
import dog121 from '../../assets/images/121.jpg';

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

  const img = () => {
    if (id === 6){
      return dog6;
    } else if (id === 16){
      return dog16;    
    } else if (id === 81){
      return dog81;    
    } else if (id === 121){
      return dog121;    
    }
  }

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
                <button className="Card-adoptButton" onClick={() => {setCart([...cart, String(id)])}}>
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
