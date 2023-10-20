import { useLayoutEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SDP from "./pages/SDP";
import SRP from "./pages/SRP";
import Header from "./components/Header";
import { GaPageViewer } from "./components/GATools";

function App() {
  useLayoutEffect(() => {
    ReactGA.initialize("UA-99765781-3", { debug: true });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/srp" element={<SRP />} />
        <Route path="/sdp/:id" element={<SDP />} />
      </Routes>
      <GaPageViewer />
    </BrowserRouter>
  );
}

export default App;
