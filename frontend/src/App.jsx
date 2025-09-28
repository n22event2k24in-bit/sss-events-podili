import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PhotoGallery from "./components/PhotoGallery";
import ServicesSection from "./components/ServicesSection";
import PackagesSection from "./components/PackagesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WeddingGallery from "./pages/WeddingGallery";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route for the homepage */}
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <HeroSection />
              <PhotoGallery />
              <ServicesSection />
              <PackagesSection />
              <AboutSection />
              <ContactSection />
              <Footer />
            </>
          }
        />

        {/* Other routes */}
        <Route path="/weddingGallery" element={
          <>
            <Navigation />
            <WeddingGallery />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
