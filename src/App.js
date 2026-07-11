import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components//Header/Header';
import Container from './components//Container/Container';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';
import { keepTheme } from './Util/themes';
import Toggle from './components/Toggle/Toggle';
import CustomCursor from './components/CustomCursor/CustomCursor';
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    keepTheme();
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="wrapper">
      <div className="content">
        <Toggle />
        <Header />
        <Container />
        <Footer />
        <ScrollButton />
      </div>
      <CustomCursor />
    </div>
  );
}

export default App;
