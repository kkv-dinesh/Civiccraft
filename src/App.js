import React from 'react';
import Header from './components/Header'; 
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import WelcomeSection from './components/WelcomeSection';
import WorkProcess from './components/WorkProcess';
import OurRecords from "./components/OurRecords"
import VideoSection from './components/VideoSection';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <AboutUs />
      <WelcomeSection />
      <WorkProcess />
      <OurRecords />
      <VideoSection />
      <OurTeam />
      <Footer />
      {/* Other components */}
    </div>
  );
};

export default App;
