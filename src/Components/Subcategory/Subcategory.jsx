import { useLoaderData } from "react-router-dom";
import CraftItemData from "../Home/CraftItems/CraftItemData";
import { Helmet } from "react-helmet-async";

const Subcategory = () => {
    const craftItemData = useLoaderData();

    return (
        <div className="py-20 mt-8 bg-color2" id="craftItems">
            <Helmet>
                <title>Sub-Category Showcase | BB-Artistry</title>
            </Helmet>
            <div className="hero -mt-20 w-full h-[50vh]" style={{ backgroundImage: 'url(https://st3.depositphotos.com/1034582/34664/v/450/depositphotos_346643858-stock-illustration-banner-background-pastel-blue-low.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-blue">
                        <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-extrabold">Sub-Category : <span className="text-red">{craftItemData[0].subcategory_Name}</span></h1>
                        <p className="mb-5 text-xs px-2 text-black">Explore a wide range of art and craft items, each offering a unique collection of paintings, drawings, and craft items. <br /> Discover your favorite pieces and add a touch of elegance to your space.</p>
                    </div>
                </div>
            </div>

            <div className="text-start mt-8 md:mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">

                    {craftItemData?.map((craftItemData) => (
                        <CraftItemData key={craftItemData._id} craftItemData={craftItemData} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Subcategory;