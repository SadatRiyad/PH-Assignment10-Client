/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyArtListCard = ({ craftItemData }) => {

    const { image, item_name, price, rating, short_description, stockStatus, _id, customization } = craftItemData;

    return (
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" data-aos-delay="0" className="card bg-base-200 shadow-md border-[.5px] transition-transform duration-300 transform hover:shadow-2xl">
            <div>
                <figure className="p-4 w-full rounded-xl">
                    <img src={image} alt="estate img" className="relative rounded-xl w-full transition-transform duration-300 transform" />
                    <div className='absolute bg-red px-4 py-1 rounded-2xl top-6 right-6'>
                        <h5 className='text-white font-bold shadow-lg'>{stockStatus}</h5>
                    </div>
                </figure>
            </div>
            <div className="card-body items-start text-left px-5 pt-0">
                <h2 className="card-title font-extrabold text-2xl mt-2 font-Rajdhani">{item_name}</h2>
                <div className="flex justify-between w-full mb-2">
                    <div><h3 className='font-extrabold text-red mt-0 pt-0'>$ {price} USD</h3></div>
                    <div><p className='font-medium text-red mt-0 pt-0'>Customizable: {customization}</p></div>
                    <div className='flex items-center gap-1 mr-2'>
                        <p className="text-lg font-medium text-red">{rating}</p>
                        <FaStar className="text-red"></FaStar>
                    </div>
                </div>
                <p className="pb-4 text-xs text-tertiary">{short_description}</p>
                <hr className="mb-2 w-full" />
                <div className="flex justify-between items-center w-full gap-2">
                    <div data-aos="fade-left" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="50" >
                        <Link to={`/craftItemDetails/id/${_id}`} className="btn bg-color2 hover:bg-transparent border-color2 text-white hover:text-color2 rounded hover:border-color2 transition-all duration-200 font-bold w-full md:px-5">Details </Link>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="50" >
                        <Link to={`/updateArtAndCraft/id/${_id}`} className="btn bg-color1 hover:bg-transparent border-color1 text-white hover:text-color1 rounded hover:border-color1 transition-all duration-200 font-bold w-full md:px-5">Update </Link>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="50" >
                        <Link to={`/craftItemDetails/id/${_id}`} className="btn bg-red hover:bg-transparent border-red text-white hover:text-red rounded hover:border-red transition-all duration-200 font-bold w-full md:px-5">Delete </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyArtListCard;