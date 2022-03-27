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
import {historyData, aboutData, achivementData, lightData, solarPanelData, windData,somaliaJumpstartData, productData, somaliaData } from "./data";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Info {...aboutData} />

       <Info pData={productData.pData} bullets={productData.bullets} h1Data={productData.h1Data} />

       <Info {...somaliaData} />
       <Info {...somaliaJumpstartData} />

       <Info {...solarPanelData}/>
       <Info {...windData}/>
       <Info {...lightData}/>
       <Info {...achivementData}/>
       {/* <Portfolio/> */}
       {/* <Works/> */}
       {/* <Testimonials/> */}
       <Contact/>
     </div>
    </div>
  );
}

export default App;
