import './App.css';
import Aboutme from "./Subcomponents/Aboutme";
import Header from "./Subcomponents/Header";
import Hero from "./Subcomponents/Hero";
import Services from "./Subcomponents/Services";
import Footer from "./Subcomponents/footer";
import Portfolio from "./Subcomponents/portfolio";
export default function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Aboutme/>
      <Services/>
      <Portfolio/>
      <Footer /> 
    </>
  )
}
