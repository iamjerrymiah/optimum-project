import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MassageTypesPage from './components/MassageTypesPage';
import MasseusesPage from './components/MasseusesPage';
import BookingPage from './components/BookingPage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import { MassageType, Masseuse } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMasseuse, setSelectedMasseuse] = useState<Masseuse | undefined>();
  const [selectedService, setSelectedService] = useState<MassageType | undefined>();

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Clear selections when navigating away from booking
    if (page !== 'booking') {
      setSelectedMasseuse(undefined);
      setSelectedService(undefined);
    }
  };

  const handleMasseuseSelect = (masseuse: Masseuse) => {
    setSelectedMasseuse(masseuse);
    setCurrentPage('booking');
  };

  const handleServiceSelect = (service: MassageType) => {
    setSelectedService(service);
    setCurrentPage('booking');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
        <HomePage 
          onPageChange={handlePageChange} 
          handleServiceSelect={handleServiceSelect} 
          handlePageChange={handlePageChange}
        />
        );
      case 'services':
        return (
          <MassageTypesPage 
            onPageChange={handlePageChange}
            onServiceSelect={handleServiceSelect}
          />
        );
      // case 'masseuses':
      //   return (
      //     <MasseusesPage 
      //       onPageChange={handlePageChange}
      //       onMasseuseSelect={handleMasseuseSelect}
      //     />
      //   );
      case 'booking':
        return (
          <BookingPage 
            onPageChange={handlePageChange}
            initialMasseuse={selectedMasseuse}
            initialService={selectedService}
          />
        );
      case 'about':
        return <AboutPage onPageChange={handlePageChange} />;
      // case 'faq':
      //   return <FAQPage onPageChange={handlePageChange} />;
      // case 'contact':
      //   return <ContactPage onPageChange={handlePageChange} />;
      default:
        return (
        <HomePage 
          onPageChange={handlePageChange} 
          handleServiceSelect={handleServiceSelect} 
          handlePageChange={handlePageChange}
        />);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;