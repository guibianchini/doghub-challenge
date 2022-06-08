import '../../scss/pages/CartPage.scss';
import deleteIcon from '../../assets/deleteIcon.svg';

import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { getDogImage } from '../utils/getDogImage';

const CartPage = () => {
  const {cart, setCart} = useSelector((state) => state);

  const removeDogFromCart = ({dogId}) => {
    const indexToRemove = cart.findIndex((dog) => String(dog) === String(dogId));
    const newCart = cart;
    newCart.splice(indexToRemove, 1);
    console.log('cart', cart);
    console.log('newCart', newCart)
    console.log('index', indexToRemove);

    setCart(newCart.length === 1 ? [] : newCart);
    console.log('cart deleted', cart);
  };

  const allDogs = useSelector((state) => (state.items));
  console.log('caos', cart)

  return (
    <div className="CartPage">
      <Header/>
      <div className="CartPage-body">
        <p className="CartPage-body-title">Sua lista de adoção</p>
        {
          cart.length <= 0
          && (
            <p>Não tem doguinhos :(</p>
          )
        }
        {
          cart
          && cart.length >= 1
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
                  onClick={() => removeDogFromCart({dogId: adoptedDog.id})}
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
