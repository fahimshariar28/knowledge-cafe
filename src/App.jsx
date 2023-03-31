import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App w-10/12 mx-auto">
      <Header></Header>
      <hr className="my-3" />
      <Home></Home>
      <Accordion></Accordion>
    </div>
  );
}

export default App;
