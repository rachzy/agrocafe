import Header from "./components/Header";
import Slider from "./components/Slider";

import Slide1 from "./assets/imagens/sliders/slider1.jpg";
import Slide2 from "./assets/imagens/sliders/slider2.jpg";
import Slide3 from "./assets/imagens/sliders/slider3.jpg";
import Slide4 from "./assets/imagens/sliders/slider4.jpg";
import Contact from "./sections/Contact/index.js";

const App = () => {
  const slides = [Slide1, Slide2, Slide3, Slide4];
  return (
    <main>
      <Header />
      <Slider images={slides} floatingDots />
      <Contact />
    </main>
  );
};

export default App;
