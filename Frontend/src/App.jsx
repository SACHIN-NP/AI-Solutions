import Carousel from "./banner/Carousel.jsx";

import React, { useEffect } from "react";
import { ReviewSection } from "./testimonal/testimonials.jsx";
import Gallery from "./photo/photo.jsx";
import { AutomationSector1 } from "./solution/Automation.jsx";
import "./App.css";
const App = () => {
   useEffect(() => {
        window.scrollTo(0,0);
      }, [])
  return (
    <>
      <Carousel />
      <AutomationSector1 />

      <Gallery />
      <ReviewSection />
    </>
  );
};
export default App;
