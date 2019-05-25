import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
        <div className='homePage'>
            <div className='top-half'>
                <div className='top-content'>
                <div className='content-1'><h4><span>Severcing all of San Diego and Riverside counties</span></h4></div>  

                <div className='content-2'><h3><span>New clients will receive 20% off of their case. Case evaluations are free!</span></h3></div>  
                </div>
                <div className='content-3'>
                    <h1>JOHN E. WILLIAMS</h1>
                    <h2>ATTORNEY AT LAW</h2>
                    <h3>Let my 37 years of experience representing those accused of crimes ranging from murders to misdemeanors guide you to the best possible outcome for your case</h3>
                </div>
              </div>
                <div className='middle-content'>
                    <h1>MY PHILOSOPHY</h1>
                    <p>Aggressive, ethical representation purposed to achieve the most favorable outcome recognizing the facts of each case, the applicable law, and the unique circumstances that each client brings.</p>
                </div>
                <div className='bottom-content'>
                    <div className='title-bottom-content'><h1>PRACTICE AREAS</h1></div>
                    <div className='law-book'>
                        <img id='law-book' src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1558735806/Screen_Shot_2019-05-23_at_4.18.37_PM.png' alt='law-book'></img>
                        <span id='img-span-law-book'>PERSONAL INJURY</span>
                    </div>
                    <div className='jail-cell'>
                        <img id='jail-cell' src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1558735804/Screen_Shot_2019-05-23_at_4.19.23_PM.png' alt='jail-cell'></img>
                        <span id='img-span-jail-cell'>CRIMINAL DEFENCE</span>    
                    </div>
                    <div className='breathlyser'>
                        <img id='breathalyser' src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1558735801/Screen_Shot_2019-05-23_at_4.20.19_PM.png' alt='breathalyser'></img>
                        <span id='img-span-breathlyser'>DUI'S</span>
                    </div>
                </div>
        </div>
        );
    }
}

export default HomePage;