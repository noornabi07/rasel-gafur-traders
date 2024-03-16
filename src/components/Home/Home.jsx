import React from 'react';
import Banner from './Banner/Banner';
import BannerTitle from './BannerTitile/BannerTitle';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerTitle></BannerTitle>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;