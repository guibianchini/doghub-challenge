export const addDogOnCart = ({ cart, setCart, dogId }) => {
  setCart([...cart, String(dogId)]);
};

export const removeDogFromCart = ({ cart, setCart, dogId }) => {
  if (cart.length === 1)
    setCart([]);
  else if (cart.length > 1) {
    const indexOfDog = cart.findIndex((dog) => {
      console.log('dog', dog);
      console.log('dogId', dogId);
      return String(dog) === String(dogId);
    });
    console.log('index', indexOfDog);
    console.log('cart', cart);
    const tempCart = cart;
    tempCart.splice(indexOfDog, 1);
    console.log('tempcart', tempCart);
    setCart(tempCart);
  }
};