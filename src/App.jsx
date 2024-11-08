import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Outlet } from "react-router-dom";

function App() {

  return <>
  <BrowserRouter>
  <div className="w-full h-full">
    <Header/>
    <br />
    <Outlet/>
    <Footer/>
  </div>
  </BrowserRouter>
  </> 
  
}

export default App;
