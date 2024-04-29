import { Link } from 'react-router-dom';

const Banner2 = () => {
    return (
        <div className="card mb-4 mt-8 lg:card-side text-white shadow-xl bg-color1 mx-4 p-4 pb-4">
            <div data-aos="fade-right" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="500" className="w-full h-full flex lg:w-2/4 items-center justify-center mt-3">
                <div>
                    <figure><img className="rounded-lg" src="https://detroitwpresidence.b-cdn.net/wp-content/uploads/2022/08/team2.jpg" alt="Painting Banner" /></figure>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="500" className="card-body w-full lg:w-2/4 justify-center pl-1 lg:pl-8">
                <p className="card-title font-normal text-xs text-slate-100 uppercase">BB-Artistry Team</p>
                <h2 className="card-title mt-2 font-bold text-2xl md:text-3xl lg:text-3xl">EXPLORE THE TEAM OF <br /> PAINTING & DRAWING</h2>
                <p className="text-slate-50 text-base mt-4">Welcome to BB-Artistry, where creativity meets craftsmanship. Immerse yourself in our curated collection of exquisite paintings, drawings, and unique craft items. Whether you are looking to adorn your space or commission a custom piece, our team of talented artists is here to bring your vision to life. Contact us today to discuss your creative ideas and discover the perfect addition to your collection.</p>
                <div className="card-actions justify-start">
                    <Link to="/contactUs" className="btn w-full bg-color2 text-blue border-blue hover:bg-blue hover:text-white hover:border-blue mt-6 hover:translate-y-1 transition-all duration-100">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner2;
