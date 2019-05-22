import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
        <div className='homePage'>
            <div className='top-content'>
              <div className='content-1'><h4><span>Severcing all of San Diego and Riverside counties</span></h4></div>  

              <div className='content-2'><h3><span>New clients will receive 20% off of their case. Case evaluations are free!</span></h3></div>  
            </div>
            <div className='content-3'>
                <h1>JOHN E. WILLIAMS</h1>
                <h2>ATTORNEY AT LAW</h2>
                <h3>Let my 37 years of experience representing those accused of crimes ranging from murders to misdemeanors guide you to the best possible outcome for your case</h3>
            </div>
            <div className='middle-content'>
                <h1>MY PHLOSOPHY</h1>
                <span>Aggressive, ethical representation purposed to achieve the most favorable outcome recognizing the facts of each case, the applicable law, and the unique circumstances that each client brings.</span>
            </div>
        </div>
        );
    }
}

export default HomePage;