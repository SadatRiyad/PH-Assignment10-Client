/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoriesCard = ({ subcategoryName, image, shortDescription }) => {
    // console.log(subcategoryName, image, shortDescription);
    return (
        <Link to={`/subCategory/${subcategoryName}`}>
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" data-aos-delay="0" className="card bg-red border-2 border-white text-white shadow-md  transition-transform duration-300 transform hover:shadow-2xl">
                <div>
                    <figure className="p-4 w-full rounded-xl">
                        <img src={image} alt="estate img" className="relative border-2 border-white rounded-xl w-full transition-transform duration-300 transform" />
                        <div className='absolute bg-blue px-4 py-1 rounded-2xl top-6 right-6 border-white border'>
                            <h5 className='text-white font-bold shadow-lg text-xs md:text-sm'>Click on the Card for Categorized Items...</h5>
                        </div>
                    </figure>
                </div>
                <div className="card-body items-start text-left px-5 pt-0 pb-6">
                    <h2 className="font-bold mt-2 font-Rajdhani text-lg">Sub-Category Name: {subcategoryName}</h2>
                    <p className="text-xs">{shortDescription}</p>
                </div>
            </div>
        </Link>
    );
};

export default CategoriesCard;