import dog6 from '../../assets/images/6.jpg';
import dog16 from '../../assets/images/16.jpg';
import dog81 from '../../assets/images/81.jpg';
import dog121 from '../../assets/images/121.jpg';

export const getDogImage = (id) => {
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
