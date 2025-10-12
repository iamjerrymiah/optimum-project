import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import MassageTypesPage from "./components/MassageTypesPage";
// import MasseusesPage from "./components/MasseusesPage";
import BookingPage from "./components/BookingPage";
// import AboutPage from "./components/AboutPage";
// import FAQPage from "./components/FAQPage";
// import ContactPage from "./components/ContactPage";
import { MassageType, Masseuse } from "./types";
import BookModel from "./components/BookModel";

// Wrapper for booking page so we can manage state
function BookingWrapper({
  selectedMasseuse,
  selectedService,
  // setSelectedMasseuse,
  // setSelectedService,
}: {
  selectedMasseuse: Masseuse | undefined;
  selectedService: MassageType | undefined;
  setSelectedMasseuse: React.Dispatch<React.SetStateAction<Masseuse | undefined>>;
  setSelectedService: React.Dispatch<React.SetStateAction<MassageType | undefined>>;
}) {
  const navigate = useNavigate();

  return (
    <BookingPage
      onPageChange={(page) => navigate(`/${page}`)}
      initialMasseuse={selectedMasseuse}
      initialService={selectedService}
    />
  );
}

function App() {
  const [selectedMasseuse, setSelectedMasseuse] = useState<Masseuse | undefined>();
  const [selectedService, setSelectedService] = useState<MassageType | undefined>();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onPageChange={(page) => (window.location.href = `/${page}`)}
                  handleServiceSelect={(service:any) => {
                    setSelectedService(service);
                    window.location.href = "/booking";
                  }}
                />
              }
            />
            <Route
              path="/services"
              element={
                <MassageTypesPage
                  // onPageChange={(page:any) => (window.location.href = `/${page}`)}
                  // onServiceSelect={(service:any) => {
                  //   setSelectedService(service);
                  //   window.location.href = "/booking";
                  // }}
                />
              }
            />
            <Route
              path="/book-xxx"
              element={
                <BookModel />
              }
            />
            <Route
              path="/booking"
              element={
                <BookingWrapper
                  selectedMasseuse={selectedMasseuse}
                  selectedService={selectedService}
                  setSelectedMasseuse={setSelectedMasseuse}
                  setSelectedService={setSelectedService}
                />
              }
            />
            {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;