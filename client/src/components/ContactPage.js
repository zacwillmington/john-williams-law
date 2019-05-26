import React, { Component } from 'react';
import { FaPhone, FaMapMarker } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
class ContactPage extends Component {
    render() {
        return (
            <div className='contact-page'>
                <h1>Contact</h1>
                <div className='contact-page__email'>
                    <MdEmail />
                    <p>johnwilliamslaw@gmail.com</p>
                </div>
                <div className='contact-page__phone'>
                    <FaPhone />
                    <p>(760) 723-0069</p>
                </div>
                <div className='contact-page__address'>
                    <FaMapMarker />
                    <p>Fallbrook San Diego, CA</p>
                </div>                
            </div>
        );
    }
}

export default ContactPage;