import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./Pages/Education";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Navbar will be displayed on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
