import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import About from "./Pages/About";
import Artists from "./Pages/Artists";
import Assets from "./Pages/Assets";
import Services from "./Pages/Services";
import MediaAcademy from "./components/MediaAcademy";
import OurClients from "./components/OurClients";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";
import AvProduction from "./components/AvProduction";
import DisplayData from "./components/DisplayData";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/artists" element={<Artists/>}/>
      <Route path="/assets" element={<Assets/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/media-academy" element={<MediaAcademy/>}/>
      <Route path="/our-clients" element={<OurClients/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/Audio-visual-production-house" element={<AvProduction/>}/>
      <Route path="/display" element={<DisplayData/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
