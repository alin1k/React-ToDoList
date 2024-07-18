import NavBar from "./components/NavBar/NavBar";
import ListGrid from "./components/ListGrid/ListGrid";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer/Footer";
import "./App.css"
import { toast, Toaster } from "sonner";

function App() {

  const [lists, setLists] = useState(()=>{
    const saved = localStorage.getItem("lists");
    const initialValue = JSON.parse(saved);
    return initialValue || [ ];
  });

  const firstTime = useRef(true);

  useEffect(()=>{
    if(firstTime.current) {
      console.log("Skipping first run");
      console.log(lists);
      firstTime.current = false;
      return;
    }

    console.log("Starting save")
    const timer = setTimeout(()=>{
      localStorage.setItem("lists", JSON.stringify(lists))
      console.log("Saved Succesfully!");
      toast.success("Saved!", {duration: 1000})
    }, 1500)

    return ()=>{
      console.log("Stopping save!");
      clearTimeout(timer);
    }
  }, [lists])

  return (
    <div className="App">
      <Toaster position="top-left" toastOptions={{className:"toastStyle"}}/>
      <NavBar setLists={setLists} lists={lists}/> 
      <ListGrid lists={lists} setLists={setLists} />
      <Footer/>
    </div>
  );
}

export default App;
