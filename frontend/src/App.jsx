import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Hero from "./pages/Hero";
import MarriagePlan from "./pages/MarriagePlan";
import Segments from "./pages/Segments";
// import Venues from "./pages/Venues";
// import WeddingDecor from "./pages/WeddingDecor";
import WeddingGallery from "./pages/WeddingGallery"; // Fixed the typo
import WelcomePage from "./pages/WelcomePage";
import ContactUs from "./pages/CotactUs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route for the homepage */}
        <Route
          path="/"
          element={
            <>
              <WelcomePage />
              <Hero />
              <Segments />
              {/* <WeddingDecor /> */}
              <MarriagePlan />
              <Gallery />
              <ContactUs />
              {/* <Owner /> */}
              <Footer />

            </>
          }
        />

        {/* Other routes */}
        <Route path="/weddingGallery" element={<WeddingGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
