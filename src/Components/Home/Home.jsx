// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useLoaderData } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';
import Banner1 from '../Banner1/Banner1';
import Banner2 from '../Banner2/Banner2';
import FAQSection from '../FAQsection/FAQsection';


const Home = () => {
    // const estateData = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home | BB-RealEstate</title>
            </Helmet>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero a3 min-h-screen">
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="px-8">
                                <h1 className="mb-6 text-4xl text-color2 lg:text-6xl md:text-5xl font-bold">Art for Every Occasion</h1>
                                <p className="mb-5 px-6 lg:px-24 text-color2 text-sm lg:text-base md:text-base">From the abstract masterpieces to charming cartoon designs, <br /> find the perfect art piece for every taste and preference.</p>
                                <a href='#banner' className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-6">Discover More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero a2 min-h-screen">
                        <div className="hero-content text-left text-white shadow-lg hero-overlay bg-opacity-30  md:bg-opacity-15 relative">
                            <div className="px-8">
                                <h1 className="mb-6 text-3xl text-color2 lg:text-5xl md:text-4xl font-bold">Elevate Your Space</h1>
                                <p className='text-sm text-color2'>Transform your home or office with captivating oil paintings <br /> and charcoal sketches that speak volumes.</p>
                                <p className="text-sm opacity-0 my-0">Unlock opportunities for growth and expansion. Our portfolio features prime locations, state-of-the-art facilities, and dynamic environments conducive to innovation and productivity.</p>
                                <a href='#banner' className="btn absolute bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold -mt-8 md:mt-0">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="zoom-in" data-aos-duration="1000" className="hero a1 min-h-screen">
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="px-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" >
                                <h1 className="mb-8 text-color2 text-4xl lg:text-6xl md:text-5xl font-extrabold">Express Your Imagination</h1>
                                <p className="mb-5 text-color2 px-6 lg:px-24 text-sm lg:text-base md:text-base">Discover a world of creativity with our unique collection of landscape paintings, <br /> portrait drawings, and watercolor art.</p>
                                <a href='#banner' className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-6">Explore Now</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Banner1></Banner1>
            {/* <Estate estateData={estateData}></Estate> */}
            <Banner2></Banner2>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;