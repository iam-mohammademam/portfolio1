import Header from "../components/Header";
import About from "./About";
import LandingPage from "./LandingPage";
import Portfolio from "./Portfolio";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <About />
      <Portfolio />
      <Services />
    </>
  );
};
export default Home;
