import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<Aboutus />} />
              <Route path="/contact" element={<Contactus />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
