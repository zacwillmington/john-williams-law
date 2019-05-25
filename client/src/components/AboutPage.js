import React, { Component } from 'react';

class AboutPage extends Component {
    render() {
        return (
            <div className='about-page'>
                <h1>About John Williams</h1> 
                <div className='about-page-content'>
                    <div className='about-page-p'>
                        <p>Attorney John Williams has 37 years of law experience in various backgrounds. Attending Colorado State University on an athletic scholarship, upon graduation he was awarded a grant to attend law school from the nationally respected Council on Legal Education Opportunity. Following graduation from San Diego's California Western School of Law, and while awaiting bar examination results, he worked as an investigator for the San Diego Office of Defender Services, the precursor of the Public Defender's Office.  Successfully passing the bar he became a trial attorney for Defenders Inc., also a precursor to the Office of the Public Defender, where he honed his trial and negotiating skills before entering private practice. His clients have included those accused of serious crimes such as murder, kidnapping, robbery, and sex crimes, as well as those charged with offenses ranging  from driving under the influence to domestic violence, assault, battery, possession, sale, or manufacture of controlled substances, insurance and welfare fraud. His vast and varied experience in the criminal defense arena provides an early insight as to what should be the realistic goal of each client, based upon the evidence and the law, tempered by the client's personal situation and the best path of action to achieve that goal.  John and his wife of 44 years who is also his high school sweetheart enjoys spending time with their three children and three grandchildren.  He enjoys motorcycling, flying sail planes and wrenching on sports cars and motorcycles.</p>
                    </div>
                    <div className='john-williams-img'>
                        <img src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1558814852/Screen_Shot_2019-05-25_at_1.36.18_PM.png'/>
                    </div>
               </div>
            </div>
        );
    }
}

export default AboutPage;