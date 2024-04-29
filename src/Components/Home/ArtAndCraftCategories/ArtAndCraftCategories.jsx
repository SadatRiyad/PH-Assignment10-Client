/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";

const ArtAndCraftCategories = ({ craftItemData }) => {
    const [subcategories, setSubcategories] = useState({});

    useEffect(() => {
        const uniqueSubcategories = {};
        craftItemData.forEach(item => {
            const { subcategory_Name, image, short_description } = item;
            if (!uniqueSubcategories[subcategory_Name]) {
                uniqueSubcategories[subcategory_Name] = { image, short_description };
            }
        });
        setSubcategories(uniqueSubcategories);
    }, [craftItemData]);

    return (
        <div>
            <div className="pt-12" id="">
                <div data-aos="zoom-in" data-aos-duration="1500" data-aos-anchor-placement="top-center" data-aos-delay="250" className="pt-16 pb-4 mb-12 mx-4 bg-color2 rounded-2xl">
                    <h2 className="text-3xl md:text-5xl text-center text-blue font-bold mb-4">Art & Craft Categories...</h2>
                    <p className="text-sm text-center px-4 md:px-20 mb-8 mt-5 text-tertiary">Explore a wide range of art and craft categories, each offering a unique collection of paintings, drawings, and craft items. <br /> Discover your favorite pieces and add a touch of elegance to your space.</p>
                    <div className="text-start my-8 mt-8 md:mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">
                            {/* Render subcategories */}
                            {Object.entries(subcategories).map(([subcategoryName, details], idx) => (
                                <CategoriesCard
                                    key={idx}
                                    subcategoryName={subcategoryName}
                                    image={details.image}
                                    shortDescription={details.short_description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtAndCraftCategories;
