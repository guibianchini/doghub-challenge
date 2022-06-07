import Routes from "./routes";
import React from "react";
import { AppContext } from "./libs/ContextLib";

function App() {
  return (
    <AppContext.Provider>
      <Routes />
    </AppContext.Provider>
  )
}

export default App;
