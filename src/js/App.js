import Routes from "./routes";
import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Store } from './config/store';


function App() {
  const store = createStore(() => Store());

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App;
