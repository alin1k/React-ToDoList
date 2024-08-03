import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ListsContainer from "./pages/ListsContainer/ListsContainer"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/> 

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lists" element={<ListsContainer/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
