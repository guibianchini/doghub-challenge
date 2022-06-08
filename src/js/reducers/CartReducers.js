export const addDogOnCart = ({ cart, setCart, dogId }) => {
  setCart([...cart, String(dogId)]);
};

export const removeDogFromCart = async ({ cart, setCart, dogId }) => {
  const newCart = cart;
  let itWasRemoved = false;
  await setCart(cart.length === 1 ? [] : newCart.filter((dog) => {
    if ((String(dog) === String(dogId)) && !itWasRemoved){
      //É O CACHORRO A SER REMOVIDO MAS NÃO FOI REMOVIDO, ENTÃO NÃO RETORNA E DIZ QUE JÁ FOI REMOVIDO
      itWasRemoved = true;
      return (String(dog) !== String(dogId));
    } else if ((String(dog) === String(dogId)) && itWasRemoved){
      //É O CACHORRO COM MESMO ID DO REMOVIDO MAS JA FOI REMOVIDO, ENTÃO RETORNA ELE
      return (String(dog) === String(dogId));
    } else {
      //NÃO É O CACHORRO, ENTÃO RETORNA ELE
      return (String(dog) !== String(dogId));
    }
  }));
};