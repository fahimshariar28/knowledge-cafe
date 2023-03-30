import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App w-10/12 mx-auto">
      <Header></Header>
      <hr className="my-3" />
      <Home></Home>
    </div>
  );
}

export default App;
