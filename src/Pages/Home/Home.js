import React from 'react';
import Banner from './Banner/Banner';
import Choose from './Choose/Choose';
import Expertise from './Expertise/Expertise';
import Partnership from './Partnership/Partnership';
// import Services from './Services/Services';
import Serving from './Serving/Serving';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Serving></Serving>
            {/* <Services></Services> */}
            <Choose></Choose>
            <Partnership></Partnership>
            <Expertise></Expertise>
        </div>
    );
};

export default Home;