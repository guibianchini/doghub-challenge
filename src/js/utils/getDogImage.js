const dog6 = 'https://doghub.s3.amazonaws.com/desafio/images/6.jpg';
const dog16 = 'https://doghub.s3.amazonaws.com/desafio/images/16.jpg';
const dog81 = 'https://doghub.s3.amazonaws.com/desafio/images/81.jpg';
const dog121 = 'https://doghub.s3.amazonaws.com/desafio/images/121.jpg';

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
