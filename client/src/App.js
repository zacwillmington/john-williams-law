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
import Footer from './components/Footer';

//logo https://static.wixstatic.com/media/5d49f2_bff266cfa6b548a883a98712f38a248a~mv2.jpg/v1/fill/w_88,h_90,al_c,q_80,usm_0.66_1.00_0.01/5d49f2_bff266cfa6b548a883a98712f38a248a~mv2.webp

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img id='logo' src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1559341191/Screen_Shot_2019-05-31_at_5.19.21_PM.png'></img>
        <NavBar />
      </header>
      <React.Fragment>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/duis' component={DUISPage}/>
        <Route exact path='/personalInjury' component={PersonalInjuryPage}/>
        <Route exact path='/criminalDefence' component={CriminalDefencePage}/>
        <Route exact path='/contact' component={ContactPage}/>
      </React.Fragment>
      <Footer/>
    </div>
  );
}

export default App;
