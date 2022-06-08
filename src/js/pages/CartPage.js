import '../../scss/pages/CartPage.scss';
import deleteIcon from '../../assets/deleteIcon.svg';

import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';

import { getDogImage } from '../utils/getDogImage';

import { removeDogFromCart } from '../reducers/CartReducers';

const CartPage = () => {
  const {cart, setCart} = useSelector((state) => state);
  const allDogs = useSelector((state) => (state.items));

  return (
    <div className="CartPage">
      <Header/>
      <div className="CartPage-body">
        <p className="CartPage-body-title">Sua lista de adoção</p>
        {
          cart
          && cart.length <= 0
          && (
            <p>Não tem doguinhos :(</p>
          )
        }
        {
          cart
          && cart.length > 0
          && (
            <button onClick={() => setCart([])} className="CartPage-clear-button">
              Limpar lista 
            </button>
          )
        }
        {
          cart
          && cart.length > 0
          && cart.map((cartDog) => {
            const adoptedDog = allDogs.find((dog) => String(dog.id) === cartDog);
            const img = getDogImage(adoptedDog.id);
            return(
              <div className="CartPage-tag">
                <div className="CartPage-tag-info">
                  <img src={img} className="CartPage-tag-image" alt={adoptedDog.name}/>
                  <p className="CartPage-tag-title">{adoptedDog.name}</p>
                </div>
                <img 
                  src={deleteIcon}
                  className="CartPage-tag-delete"
                  onClick={async (e) => {
                    removeDogFromCart({cart, setCart, dogId: adoptedDog.id});
                  }}
                  alt={adoptedDog.name}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default CartPage;
