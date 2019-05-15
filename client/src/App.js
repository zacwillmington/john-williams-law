import React from 'react';
import './App.css'; 
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import DUISPage from './components/DUISPage';
import CriminalDefencePage from './components/CriminalDefencePage';
import PersonalInjuryPage from './components/PersonalInjuryPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <React.Fragment>
        <Route />
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
