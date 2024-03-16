import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Container from '../../Shared/Container/Container';

// image import here
import slider1 from '../../../assets/banner/slider1.jpg'
import slider2 from '../../../assets/banner/slider2.jpg'
import slider3 from '../../../assets/banner/slider3.jpg'
import slider4 from '../../../assets/banner/slider4.jpg'
import slider5 from '../../../assets/banner/slider5.jpg'

const Banner = () => {
    return (
        <Container>
            <div className='borde mt-2 md:mt-5'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slider1} className="w-full  h-[400px] md:h-[620px] xl:[780px] rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={slider2} className="w-full h-[400px] md:h-[620px] xl:[780px] rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={slider3} className="w-full h-[400px] md:h-[620px] xl:[780px] rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={slider4} className="w-full h-[400px] md:h-[620px] xl:[780px] rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={slider5} className="w-full h-[400px] md:h-[620px] xl:[780px] rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;