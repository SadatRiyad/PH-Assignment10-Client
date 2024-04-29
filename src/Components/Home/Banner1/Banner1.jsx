const Banner1 = () => {
    return (
        <div className="md:px-4 rounded-b-lg pt-28" id='banner'>
            <div className="container mx-auto">
                <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="center-center" data-aos-delay="0" className="text-3xl md:text-4xl font-bold text-center px-4 mb-16">Discover the Beauty of Painting & Drawing...</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 px-2">
                    {/* Landscape Painting */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="400" className="card bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center px-5 py-3 bg-red">
                            <h1 className="mx-0 text-white font-semibold text-2xl">Landscape Painting</h1>
                        </div>
                        <div className="card-body py-4 px-5">
                            <h1 className="text-2xl font-Rajdhani font-semibold text-gray-800">Explore Scenic Vistas</h1>
                            <p className="py-2 text-sm text-tertiary">Capture nature beauty with captivating landscape paintings.</p>
                            <a href="#craftItems" className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-4">View Collection</a>
                        </div>
                    </div>
                    
                    {/* Portrait Drawing */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300" className="card grow bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center px-5 py-3 bg-red">
                            <h1 className="mx-0 text-white font-semibold text-2xl">Portrait Drawing</h1>
                        </div>
                        <div className="card-body py-4 px-5">
                            <h1 className="text-2xl font-Rajdhani font-semibold text-gray-800">Captivating Portraits</h1>
                            <p className="py-2 text-sm text-tertiary">Experience the art of detailed portrait drawings.</p>
                            <a href="#craftItems" className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-4">View Collection</a>
                        </div>
                    </div>
                    
                    {/* Watercolour Painting */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200" className="card grow bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center px-5 py-3 bg-red">
                            <h1 className="mx-0 text-white font-semibold text-2xl">Watercolour Painting</h1>
                        </div>
                        <div className="card-body py-4 px-5">
                            <h1 className="text-2xl font-Rajdhani font-semibold text-gray-800">Expressive Watercolour</h1>
                            <p className="py-2 text-sm text-tertiary">Discover the vibrant world of watercolour art.</p>
                            <a href="#craftItems" className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-4">View Collection</a>
                        </div>
                    </div>
                    
                    {/* Oil Painting */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" className="card grow bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center px-5 py-3 bg-red">
                            <h1 className="mx-0 text-white font-semibold text-2xl">Abstract Oil Painting</h1>
                        </div>
                        <div className="card-body py-4 px-5">
                            <h1 className="text-2xl font-Rajdhani font-semibold text-gray-800">Rich and Textured Oils</h1>
                            <p className="py-2 text-sm text-tertiary">Explore the world of oil painting with its depth and texture.</p>
                            <a href="#craftItems" className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-4">View Collection</a>
                        </div>
                    </div>
                    
                    {/* Charcoal Sketching */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="0" className="card grow bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center px-5 py-3 bg-red">
                            <h1 className="mx-0 text-white font-semibold text-2xl">Charcoal Sketching</h1>
                        </div>
                        <div className="card-body py-4 px-5">
                            <h1 className="text-2xl font-Rajdhani font-semibold text-gray-800">Dramatic Charcoal Art</h1>
                            <p className="py-2 text-sm text-tertiary">Discover the power and emotion of charcoal sketching.</p>
                            <a href="#craftItems" className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-4">View Collection</a>
                        </div>
                    </div>
                    
                    {/* Cartoon Drawing */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="-100" className="card grow bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center px-5 py-3 bg-red">
                            <h1 className="mx-0 text-white font-semibold text-2xl">Cartoon Drawing</h1>
                        </div>
                        <div className="card-body py-4 px-5">
                            <h1 className="text-2xl font-Rajdhani font-semibold text-gray-800">Whimsical Cartoons</h1>
                            <p className="py-2 text-sm text-tertiary">Explore playful and imaginative cartoon designs.</p>
                            <a href="#cartoons" className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-4">View Collection</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner1;
