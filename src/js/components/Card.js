import '../../scss/components/Card.scss';
import React, { useEffect, useState } from 'react';
import dog6 from '../../assets/images/6.jpg';
import dog16 from '../../assets/images/16.jpg';
import dog81 from '../../assets/images/81.jpg';
import dog121 from '../../assets/images/121.jpg';
import classnames from 'classnames';


const Card = (props) => {
  const {expandData} = props;
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
                {
                  bred_for
                  && (
                    <p>-{bred_for}</p>
                  )
                }
                {
                  breed_group
                  && (
                    <p>-{breed_group}</p>
                  )
                }
                {
                  height
                  && (
                    <div>
                      <p>-{height.imperial}</p>
                      <p>-{height.metric}</p>
                    </div>
                  )
                }
                {
                  life_span
                  && (
                    <p>-{life_span}</p>
                  )
                }
                {
                  bred_for
                  && (
                    <p>-{bred_for}</p>
                  )
                }
                {
                  weight
                  && (
                    <div>
                      <p>-{weight.imperial}</p>
                      <p>-{weight.metric}</p>
                    </div>
                  )
                }
              </div>
            )
          }
        </div>

     

      </div>
  );
}

export default Card;
