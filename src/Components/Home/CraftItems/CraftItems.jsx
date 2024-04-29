import PropTypes from 'prop-types';
import CraftItemData from './CraftItemData';

const CraftItems = ({ craftItemData }) => {

    return (
        <div className="py-28 bg-base-300 -mt-6" id="craftItems">
            <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" data-aos-delay="0" className="text-5xl text-center font-bold mb-4">Craft Items Showcase</h2>
            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" data-aos-delay="0" className="text-sm text-center px-4 md:px-20 mb-8 mt-5 text-tertiary">Discover exquisite craft items carefully curated for art enthusiasts like you. <br /> Each piece is crafted with passion and creativity, bringing a <br /> touch of elegance to your space.
            </p>
            <div className="text-start mt-8 md:mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">

                    {craftItemData?.slice(0, 6).map((craftItemData) => (
                        <CraftItemData key={craftItemData._id} craftItemData={craftItemData} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default CraftItems;

CraftItems.propTypes = {
    craftItemData: PropTypes.array.isRequired
}
