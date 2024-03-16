import React from 'react';
import gallery1 from '../../../assets/gallery/gallery1.jpg'
import gallery2 from '../../../assets/gallery/gallery2.jpg'
import gallery3 from '../../../assets/gallery/gallery3.jpg'
import gallery4 from '../../../assets/gallery/gallery4.jpg'
import gallery5 from '../../../assets/gallery/gallery5.jpg'
import gallery6 from '../../../assets/gallery/gallery6.jpg'
import gallery7 from '../../../assets/gallery/gallery7.jpg'
import Container from '../../Shared/Container/Container';

const Gallery = () => {
    return (
        <Container>
            {/* first */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 md:mt-20 justify-center items-center">
                <div></div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                    className="text-center hover:scale-105 hover:duration-300 cursor-pointer shadow-lg rounded-md p-4 shadow-slate-500"
                >
                    <img
                        src={gallery1}
                        className="shadow-xl mx-auto rounded-xl
          "
                        alt=""
                    />
                    <p className="text-2xl font-semibold mt-5 text-rose-500 font-serif">
                        Unique Tour
                    </p>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                    className="text-center hover:scale-105 hover:duration-300 cursor-pointer shadow-lg rounded-md p-4 shadow-slate-500"
                >
                    <img src={gallery2} className="shadow-xl mx-auto rounded-2xl" alt="" />
                    <p className="text-2xl font-semibold mt-5 text-rose-500 font-serif">
                        Business Plan Tour
                    </p>
                </div>
                <div></div>
            </div>

            {/* secoond */}

            <div className="md:flex flex-row  justify-center my-5 md:my-20 items-center gap-10">
                <div></div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                    className="text-center md:w-1/4 hover:scale-105 hover:duration-300 cursor-pointer shadow-lg rounded-md p-4 shadow-slate-500"
                >
                    <img src={gallery3} className="shadow-xl mx-auto rounded-xl" alt="" />
                    <p className="text-2xl font-semibold mt-5 text-rose-500 font-serif">
                        Super Tour
                    </p>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                    className="text-center md:w-1/4 hover:scale-105 hover:duration-300 my-6 cursor-pointer shadow-lg rounded-md p-4 shadow-slate-500"
                >
                    <img src={gallery4} className="shadow-xl mx-auto rounded-xl" alt="" />
                    <p className="text-2xl font-semibold mt-5  text-rose-500 font-serif">
                        Corn Loading
                    </p>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                    className="text-center md:w-1/4 hover:scale-105 hover:duration-300 cursor-pointer shadow-lg rounded-md p-4 shadow-slate-500"
                >
                    <img src={gallery5} className="shadow-xl mx-auto rounded-xl" alt="" />
                    <p className="text-2xl font-semibold mt-5 text-rose-500 font-serif">
                        Checking Corn Loading
                    </p>
                </div>
                <div></div>
            </div>

            {/* third */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 mt-5 md:mt-20 justify-center items-center">
                <div></div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                    className="text-center hover:scale-105 hover:duration-300 cursor-pointer shadow-lg rounded-md p-4 shadow-slate-500"
                >
                    <img src={gallery6} className="shadow-xl mx-auto rounded-xl" alt="" />
                    <p className="text-2xl font-semibold mt-5 text-rose-500 font-serif">
                        Future Place
                    </p>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                    className="text-center hover:scale-105 hover:duration-300 cursor-pointer shadow-lg rounded-md p-4 shadow-slate-500"
                >
                    <img src={gallery7} className="shadow-xl mx-auto rounded-xl" alt="" />
                    <p className="text-2xl font-semibold mt-5 text-rose-500 font-serif">
                        Super Checking Corn
                    </p>
                </div>
                <div></div>
            </div>
        </Container>
    );
};

export default Gallery;