import NavBar from "./components/NavBar/NavBar";
import ListGrid from "./components/ListGrid/ListGrid";
import Footer from "./components/Footer/Footer";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/> 

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lists" element={<ListGrid/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
