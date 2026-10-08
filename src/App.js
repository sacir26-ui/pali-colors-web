import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<div>O nama</div>} />
        <Route path="/usluge" element={<div>Usluge</div>} />
        <Route path="/projekti" element={<div>Projekti</div>} />
        <Route path="/kontakt" element={<div>Kontakt</div>} />
      </Routes>
    </>
  );
}

export default App;