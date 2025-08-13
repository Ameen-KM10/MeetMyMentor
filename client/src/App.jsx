import NavBar from "./component/NavBar";
import Calculator from "./pages/Calculator";
import FeaturesTab from "./pages/FeaturesTab";
import GridsBackground from "./pages/GridsBackground";
import LandingPage from "./pages/LandingPage";
import NicheFilter from "./pages/NicheFilter";
import Stats from "./pages/Stats";


function App() {

  return (
    <>
      {/* <LandingPage /> */}
      <NavBar />
      <GridsBackground />
      <NicheFilter />
      <Stats />
      <FeaturesTab />
      <Calculator />
    </>
  );
}

export default App;
