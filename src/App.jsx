import NavBar from "./components/NavBar/NavBar";
import ListGrid from "./components/ListGrid/ListGrid";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import "./App.css"

function App() {

  const [lists, setLists] = useState([ ]);

  return (
    <div className="App">
      <NavBar setLists={setLists}/> 
      <ListGrid lists={lists} setLists={setLists} />
      <Footer/>
    </div>
  );
}

export default App;
