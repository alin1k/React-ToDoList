import NavBar from "./components/NavBar/NavBar";
import ListGrid from "./components/ListGrid/ListGrid";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import "./App.css"

function App() {

  const [lists, setLists] = useState(()=>{
    const saved = localStorage.getItem("lists");
    const initialValue = JSON.parse(saved);
    return initialValue || [ ];
  });

  // useEffect(()=>{
  //   localStorage.setItem("lists", JSON.stringify(lists))
  // }, [lists])

  return (
    <div className="App">
      <NavBar setLists={setLists} lists={lists}/> 
      <ListGrid lists={lists} setLists={setLists} />
      <Footer/>
    </div>
  );
}

export default App;
