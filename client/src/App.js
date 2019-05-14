import React from 'react';
import './App.css'; 
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import DUISPage from './components/DUISPage';
import CriminalDefencePage from './components/CriminalDefencePage';
import PersonalInjuryPage from './components/PersonalInjuryPage';
import Hompage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <React.Fragment>
        <HomePage />
        <AboutPage />
        <ContactPage />
        <DUISPage />
        <PersonalInjuryPage />
        <CriminalDefencePage />
      </React.Fragment>
    </div>
  );
}

export default App;
