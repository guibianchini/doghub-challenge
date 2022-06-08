import { useState } from 'react';
import { getAllDogsInfo } from '../utils/getAllDogsInfo';

export function Store() {
  const [dogsData, setDogsData] = useState([]);
  const [cart, setCart] = useState([]);
  
  if (dogsData.length <= 0)
    getAllDogsInfo({setDogsData});
  
  return ({
    items:dogsData,
    setCart,
    cart,
  })
}
