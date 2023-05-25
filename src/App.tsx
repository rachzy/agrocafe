import Header from "./components/Header";
import Slider from "./components/Slider";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";
import TextSection from "./components/TextSection/";
import Title from "./components/Title";

import Slide1 from "./assets/imagens/sliders/slider1.jpg";
import Slide2 from "./assets/imagens/sliders/slider2.jpg";
import Slide3 from "./assets/imagens/sliders/slider3.jpg";
import Slide4 from "./assets/imagens/sliders/slider4.jpg";

import Gotinhas from "./assets/imagens/demais-imagens/gotinhas.png";

const App = () => {
  const slides = [Slide1, Slide2, Slide3, Slide4];
  return (
    <main>
      <Header />
      <Slider images={slides} floatingDots />
      <TextSection>
        <div className="content-wrapper">
          <Title>
            Somos a AgroCafé, uma empresa que atua no agronegócio com mais de 15
            anos de mercado.
          </Title>
          <img src={Gotinhas} alt="gotinhas agrocafe" />
        </div>
        <div className="content-wrapper justify">
          <p>
            Oferecemos inovadores sistemas de irrigação, sem a necessidade de
            expandir a sua propriedade.
          </p>

          <p>
            Assim, você pode atingir altas produtividades, aumentar a qualidade
            do seu cultivo e ainda reduzir, significativamente, o uso de insumos
            e de mão de obra.
          </p>
          <p>
            Uma de nossas unidades está, estrategicamente, localizada em
            Patrocínio/MG. O município é o maior produtor de café do Brasil.
            Essa unidade é revendedora autorizada da Netafim, empresa referência
            internacional em irrigação.
          </p>
          <p>
            Além da cultura do café, atendemos também lavouras brancas e
            pastagens
          </p>
        </div>
      </TextSection>
      <FAQ />
      <Contact />
    </main>
  );
};

export default App;
