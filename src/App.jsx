import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import BgEffect from "./Components/BgEffect";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">
        <div className="relative z-10 px-6 py-20 text-center">
          <BgEffect />
          <BrowserRouter>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
