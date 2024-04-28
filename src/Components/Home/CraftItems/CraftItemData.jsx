/* eslint-disable react/prop-types */

import { FaPaintbrush, FaStar, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CraftItemData = ({ craftItemData }) => {

    const { image, item_name, price, rating, short_description, stockStatus, subcategory_Name, userName, _id } = craftItemData;
    // console.log(image, item_name, price, rating, short_description, stockStatus, subcategory_Name, userEmail, userName, _id)

    return (
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" data-aos-delay="0" className="card bg-base-100 shadow-md border-[.5px] transition-transform duration-300 transform hover:shadow-2xl">
            <div>
                <figure className="p-4 w-full rounded-xl">
                    <img src={image} alt="estate img" className="relative rounded-xl w-full transition-transform duration-300 transform" />
                    <div className='absolute bg-red px-4 py-1 rounded-2xl top-6 right-6'>
                        <h5 className='text-white font-bold shadow-lg'>{stockStatus}</h5>
                    </div>
                </figure>
            </div>
            <div className="card-body items-start text-left px-5 pt-0">
                <h2 className="card-title font-extrabold mt-2 font-Rajdhani">{item_name}</h2>
                <div className="flex justify-between w-full">
                    <div><h3 className='font-extrabold text-red mt-0 pt-0'>$ {price} USD</h3></div>
                    <div className='flex items-center gap-1 mr-2'>
                        <FaStar className="text-red"></FaStar>
                        <p className="text-base font-medium text-red">{rating}</p>
                    </div>
                </div>
                <p className="pb-4 text-xs text-tertiary">{short_description}</p>
                <hr className="mb-2 w-full" />
                <div className="flex justify-between items-center w-full gap-2">

                    <div>
                        <div className='flex items-center gap-1 mb-1'>
                            <FaPaintbrush className="text-red"></FaPaintbrush>
                            <p className="text-xs font-semibold text-red mr-2">{subcategory_Name}</p>
                        </div>
                        <p className="flex mt-2 text-xs font-semibold gap-1 text-red"><FaUser className='mr-1' />{userName}</p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="50" >
                        <Link to={`/estateDetails/id/${_id}`} className="btn bg-red hover:bg-transparent border-red text-white hover:text-red rounded hover:border-red transition-all duration-200 font-bold mt-0">View Details </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftItemData;