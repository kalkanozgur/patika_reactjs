import "./App.css";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <User name={"Özgür"} surName={"KALKAN"} isLoggedIn={true} age={30} />
    </div>
  );
}

export default App;
