import NavBar from "./components/NavBar/NavBar";
import ListGrid from "./components/ListGrid/ListGrid";
import { useState } from "react";

function App() {

  const [lists, setLists] = useState([ ]);

  return (
    <div className="App">
      <NavBar setLists={setLists}/> 
      <ListGrid lists={lists} setLists={setLists} />
    </div>
  );
}

export default App;
