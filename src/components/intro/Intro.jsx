import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  const solarRef = useRef();
  const windRef = useRef();

  useEffect(() => {
    init(solarRef.current, {
      showCursor: false,
      loop:false,
      // backDelay: 1500,
      // backSpeed:60,
      strings: ["Solar Panel"],
    });
  }, []);

  useEffect(() => {
    init(windRef.current, {
      showCursor: false,
      loop:false,
      strings: ["Wind Turbine"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/* <img src="assets/man.png" alt="" /> */}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Green Energy Technologies LTD</h1>
          <h2>Renewable Technology Specializations:</h2>
          <h3><span ref={solarRef}></span></h3>
          <h3><span ref={windRef}></span></h3>

        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}