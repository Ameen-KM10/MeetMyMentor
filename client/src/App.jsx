import NavBar from "./component/NavBar";
import Calculator from "./pages/Calculator";
import Faq from "./pages/Faq";
import FeaturesSection from "./pages/FeaturesSection";
import FeaturesTab from "./pages/FeaturesTab";
import Footer from "./pages/Footer";
import GridsBackground from "./pages/GridsBackground";
import LandingPage from "./pages/LandingPage";
import MentorTestimonials from "./pages/MentorTestimonials";
import NicheFilter from "./pages/NicheFilter";
import Stack from "./pages/Stack";
import Stats from "./pages/Stats";

function App() {
  return (
    <>
      <NavBar />
      <GridsBackground />
      <NicheFilter />
      <Stats />
      <div className="sm:hidden lg:inline">
        <Stack />
      </div>
      <div className="lg:hidden">
        <FeaturesTab />
      </div>
      {/* <Calculator /> */}
      <FeaturesSection />
      <MentorTestimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
