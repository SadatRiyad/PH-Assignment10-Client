import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { EffectCoverflow, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Details.css';
import { FaStar } from "react-icons/fa6";
import { FaLevelDownAlt } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import CraftItemData from "../Home/CraftItems/CraftItemData";
import { AuthContext } from "../../ContextApi/AuthProvider/AuthProvider";
import { Swiper } from 'swiper/react';

const CraftItemDetails = () => {
    const item = useLoaderData();
    const { data } = useContext(AuthContext);
    const craftItemData = data;

    // console.log(item);
    const { customization, image, item_name, price, processing_time, rating, short_description, stockStatus, subcategory_Name, userEmail, userName, _id } = item;
    const [craftFormData, setCraftFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        subCategoryType: '',
        paymentCategoryType: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        setCraftFormData({
            ...craftFormData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // console.log("Form Data:", craftFormData);
        toast.success("Your Booking has been submitted successfully! We will contact you shortly to confirm the details.")
        // Reset form fields after submission
        setCraftFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            subCategoryType: '',
            paymentCategoryType: ''
        });
    };


    return (
        <>
            <Helmet>
                <title>CraftItem Details | BB-Artistry</title>
            </Helmet>
            <div className="card-body px-1 md:px-4 lg:card-side bg-base-200 rounded-2xl my-2 md:my-8">
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="top-center" data-aos-delay="50" className="card-body bg-blue rounded-2xl lg:w-2/4 p-8 lg:p-6 justify-around">
                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="top-center" data-aos-delay="500" >
                        <img src={image} alt="estate" className="rounded-xl w-full transition-transform duration-300 transform" />
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold text-red text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Author Name : </span> {userName}</p>
                        <p className="font-semibold text-red text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Author Email : </span> {userEmail}</p>
                        <p className="font-semibold text-red text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Art ID : </span> {_id}</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1100" data-aos-anchor-placement="top-center" data-aos-delay="50" className="card-body md:mt-6 lg:mt-0 lg:ml-5 px-4 lg:px-8 lg:w-3/4">
                    <div data-aos="zoom-in" data-aos-duration="1300" data-aos-anchor-placement="center-center" data-aos-delay="100" className="flex items-center gap-4 my-2">
                        <div className='bg-red px-6 py-1 rounded-2xl top-2 right-2 w-fit'>
                            <h5 className='text-white font-bold shadow-lg'>{stockStatus}</h5>
                        </div>
                        <div className='bg-red px-6 py-1 rounded-2xl top-2 right-2 w-fit'>
                            <h5 className='text-white font-bold shadow-lg'>{subcategory_Name}</h5>
                        </div>
                    </div>
                    <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">{item_name} is <span className="text-red">{stockStatus}</span></h2>
                    <p className="text-tertiary font-semibold text-xs md:text-base mt-4"><span>{short_description}</span></p>
                    <hr className="mt-2 lg:my-4 border-t-2" />
                    <span className="text-xs md:text-base lg:text-xl mt-2 text-red font-bold">Details : </span>
                    <p className="font-semibold text-xs md:text-base lg:text-lg"><span className="text-tertiary font-bold">Customization : </span> {customization}</p>
                    <p className="font-semibold text-xs md:text-base lg:text-lg flex items-center text-center"><span className="text-tertiary font-bold mr-1">Ratings : </span> {rating} out of 5.0 <FaStar className="text-orange-400 ml-1 items-center"></FaStar></p>
                    <p className="font-semibold text-xs md:text-base lg:text-lg"><span className="text-tertiary font-bold">Processing Time : </span> {processing_time}</p>
                    <p className="font-semibold text-xs md:text-base lg:text-lg"><span className="text-tertiary font-bold">Price : </span>${price} USD</p>
                    <hr className="mt-1 lg:my-4 border-t-2" />
                    <div data-aos="zoom-in" data-aos-duration="400" data-aos-anchor-placement="top-bottom" data-aos-delay="200" className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 md:mt-1">
                        <a href="#BookNow" className="btn w-full mr-4 bg-red hover:bg-transparent border-red text-white hover:text-red rounded hover:border-red  hover:-translate-y-0 transition-all duration-200">Book Now</a>
                        <a href="#moreCrafts" className="btn w-full mr-4 bg-blue hover:bg-transparent border-blue text-white hover:text-blue rounded hover:border-blue  hover:-translate-y-0 transition-all duration-200">Explore Similar Craft</a>
                    </div>
                </div>
            </div>
            {/* Schedule a Tour Section */}
            <div className="pt-16" id="BookNow">
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="top-center" data-aos-delay="0" className="p-5 pt-12 md:pt-6 bg-red mb-10 rounded-xl mx-4">
                    <h3 className="px-0 text-3xl text-white text-center font-bold shadow-lg flex justify-center mb-8 py-4">BOOKING FORM <FaLevelDownAlt className="text-lg ml-2 mt-3"></FaLevelDownAlt></h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full mb-4">
                            <div className="mb-4 text-white w-full">
                                <label htmlFor="subCategoryType" className="block mb-2 font-semibold">Select the Subcategory Name:</label>
                                <select id="subCategoryType" name="subCategoryType" onChange={handleInputChange} value={craftFormData.subCategoryType} required className="border rounded-md px-3 py-2 w-full text-blue text-base">
                                    <option value="">Select Subcategory</option>
                                    <option value="Landscape Painting">Landscape Painting</option>
                                    <option value="Portrait Drawing">Portrait Drawing</option>
                                    <option value="Watercolour Painting">Watercolour Painting</option>
                                    <option value="Oil Painting">Oil Painting</option>
                                    <option value="Charcoal Sketching">Charcoal Sketching</option>
                                    <option value="Cartoon Drawing">Cartoon Drawing</option>
                                </select>
                            </div>
                            <div className="mb-4 text-white w-full">
                                <label htmlFor="paymentCategoryType" className="block mb-2 font-semibold">Your Preference Payment Type:</label>
                                <select id="paymentCategoryType" name="paymentCategoryType" onChange={handleInputChange} value={craftFormData.paymentCategoryType} required className="border rounded-md px-3 py-2 w-full text-blue text-base">
                                    <option value="">Select Payment Type</option>
                                    <option value="Prepayment">Prepayment</option>
                                    <option value="Cash on Delivery (COD)">Cash on Delivery (COD)</option>
                                    <option value="Advance Payment">Advance Payment</option>
                                    <option value="Online Transfer">Online Transfer</option>
                                    <option value="Installment Plan">Installment Plan</option>
                                    <option value="Bank Transfer">Bank Transfer</option>
                                    <option value="Card Payment">Card Payment</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-semibold text-white">Your Name:</label>
                                <input type="text" placeholder="Your Full Name" id="name" name="name" onChange={handleInputChange} value={craftFormData.name} required className="border rounded-md px-3 py-2 w-full" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 font-semibold text-white">Your Email:</label>
                                <input type="email" placeholder="example@mail.com" id="email" name="email" onChange={handleInputChange} value={craftFormData.email} required className="border rounded-md px-3 py-2 w-full" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 font-semibold text-white">Your Phone:</label>
                                <input placeholder="+1 (123) 456-7890" type="tel" id="phone" name="phone" onChange={handleInputChange} value={craftFormData.phone} required className="border rounded-md px-3 py-2 w-full" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="message" className="block mb-2 font-semibold text-white">Your Message:</label>
                            <textarea placeholder={`I would like to book "${item_name}", item ID: "${_id}".`} type="textarea" cols="50" rows="5" id="message" name="message" onChange={handleInputChange} value={craftFormData.message} required className="border rounded-md px-3 py-2 w-full" />
                        </div>
                        <button type="submit" className="btn bg-blue hover:bg-white border-blue text-white hover:text-blue rounded hover:border-white w-full mb-6 transition-all hover:translate-y-1 duration-200 font-bold mt-5 shadow-2xl">Book Now</button>
                    </form>
                </div>
            </div>
            <div className="pt-12" id="moreCrafts">
                <div data-aos="zoom-in" data-aos-duration="1500" data-aos-anchor-placement="top-center" data-aos-delay="250" className="pt-16 pb-4 mb-12 mx-4 bg-blue rounded-2xl">
                    <h2 className="text-3xl md:text-5xl text-center font-bold mb-4 text-white">Explore More Similar Art & Craft...</h2>
                    <p className="text-xs md:text-sm text-center px-4 md:px-20 mb-8 text-tertiary">Discover exquisite craft items carefully curated for art enthusiasts like you. <br /> Each piece is crafted with passion and creativity, bringing a <br /> touch of elegance to your space.</p>

                    <div className="text-start">
                        <div>
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                pagination={{ clickable: true }}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                modules={[EffectCoverflow, Pagination]}
                                className="mySwiper"
                            >
                                {craftItemData?.filter((craftItemData) => craftItemData._id !== _id).map(craftItemData => (
                                    <SwiperSlide key={craftItemData._id}>
                                        <CraftItemData craftItemData={craftItemData} />
                                    </SwiperSlide>
                                ))}

                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default CraftItemDetails;