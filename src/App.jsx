import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Info from "./components/about/Info";
import {historyData, aboutData, achivementData, lightData, solarPanelData, windData } from "./data";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Info pData={aboutData.pData} h1Data={aboutData.h1Data} />
       <Info pData={solarPanelData.pData} h1Data={solarPanelData.h1Data} imgData={solarPanelData.imgData}/>
       <Info pData={windData.pData} h1Data={windData.h1Data} imgData={windData.imgData}/>
       <Info pData={lightData.pData} h1Data={lightData.h1Data} imgData={lightData.imgData}/>
       <Info pData={historyData.pData} h1Data={historyData.h1Data} />
       <Info pData={achivementData.pData} h1Data={achivementData.h1Data} />
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
