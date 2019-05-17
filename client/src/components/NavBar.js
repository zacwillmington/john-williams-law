import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <div>
                <ul className='nav'>
                    <li className='nav-link'><NavLink to='/' >Home</NavLink></li>
                    <li className='nav-link'><NavLink to='/contact'>Contact</NavLink></li>
                    <li className='nav-link'><NavLink to='/criminalDefence'>Criminal Defence</NavLink></li>
                    <li className='nav-link'><NavLink to='/DUIS'>DUIS</NavLink></li>
                    <li className='nav-link'><NavLink to='/personalInjury'>Personal Personal Injury</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;