import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CriminalDefencePage from './CriminalDefencePage';
import PersonalInjuryPage from './PersonalInjuryPage';


class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink to='/home' >Home</NavLink></li>
                    <li><NavLink to='/contact'>contact</NavLink></li>
                    <li><NavLink to='/crimnalDefence'>Criminal Defence</NavLink></li>
                    <li><NavLink to='/DUIS'>DUIS</NavLink></li>
                    <li><NavLink to='/personalInjury'>Personal Personal Injury</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;