import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Service from '../../Service/Service';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Humanity from '../Humanity/Humanity';
import Team from '../Team/Team';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
            <Humanity></Humanity>
            <Choose></Choose>
            <Team></Team>
        </div>
    );
};

export default Home;