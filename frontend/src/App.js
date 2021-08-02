import "./App.css";
import SceneComponent from "./components/Scene/SceneComponent";
import Loader from "./components/Loader/LoaderComponent";
import LoaderContext from "./components/Loader/LoaderContext";
import React, { useState } from "react";

const App = () => {
  const [load, setLoad] = useState(0);
  const contextLoadValue = { load, setLoad };

  return (
    <LoaderContext.Provider value={contextLoadValue}>
      <div className="App">
        <SceneComponent></SceneComponent>
        {!contextLoadValue.load && <Loader></Loader>}
      </div>
    </LoaderContext.Provider>
  );
};

export default App;
