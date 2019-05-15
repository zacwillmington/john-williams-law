import React from 'react';
import './App.css'; 
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import DUISPage from './components/DUISPage';
import CriminalDefencePage from './components/CriminalDefencePage';
import PersonalInjuryPage from './components/PersonalInjuryPage';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <React.Fragment>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/contact' component={ContactPage}/>
        <Route exact path='/duis' component={DUISPage}/>
        <Route exact path='/personalInjury' component={PersonalInjuryPage}/>
        <Route exact path='/criminalDefence' component={CriminalDefencePage}/>
      </React.Fragment>
    </div>
  );
}

export default App;
