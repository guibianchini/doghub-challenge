import Routes from "./routes";
import React from "react";
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';
import { createStore } from 'redux';


function App() {
  
  const [dogsData, setDogsData] = useState([]);

  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    console.log(cart);
  }, [cart])

  useEffect(() => {
    let xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        setDogsData(JSON.parse(xhttp.responseText));
      }
    };
  
    xhttp.open("GET", `http://localhost:8000/breeds`, true);
    xhttp.send();
  }, [])

  const store = createStore(() => {
    return ({
      items: dogsData,
      setCart,
      cart,
    })
  })

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App;
