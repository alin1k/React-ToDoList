import NavBar from "./components/NavBar/NavBar";
import ListGrid from "./components/ListGrid/ListGrid";
import Footer from "./components/Footer/Footer";
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ListGrid/>
      <Footer/>
    </div>
  );
}

export default App;
