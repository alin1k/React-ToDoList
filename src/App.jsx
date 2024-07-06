import NavBar from "./components/NavBar/NavBar";
import ListGrid from "./components/ListGrid/ListGrid";
import { useState } from "react";

function App() {

  const [lists, setLists] = useState([]);

  return (
    <div className="App">
      <NavBar setLists={setLists}/> 
      {lists.length > 0?
        <ListGrid lists={lists}/>
        :
        <p>Sorry You dont have any lists at the moment. Add a new list.</p>
      }
    </div>
  );
}

export default App;
