import Header from "./components/Header";
import Slider from "./components/Slider";
import Descricao from "./sections/Descricao";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

import Slide1 from "./assets/imagens/sliders/slider1.jpg";
import Slide2 from "./assets/imagens/sliders/slider2.jpg";
import Slide3 from "./assets/imagens/sliders/slider3.jpg";
import Slide4 from "./assets/imagens/sliders/slider4.jpg";

const App = () => {
  const slides = [Slide1, Slide2, Slide3, Slide4];
  return (
    <main>
      <Header />
      <Slider images={slides} floatingDots />
      <Descricao />
      <FAQ />
      <Contact />
    </main>
  );
};

export default App;
