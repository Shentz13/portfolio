import "./App.css";
import SceneComponent from "./components/Scene/SceneComponent";
import Loader from "./components/Loader/LoaderComponent";

function App() {
  return (
    <div className="App">
      <SceneComponent></SceneComponent>
      <Loader></Loader>
    </div>
  );
}

export default App;
