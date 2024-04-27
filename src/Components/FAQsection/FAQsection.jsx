const FAQSection = () => {
    return (
        <div className="pt-12 pb-8 bg-slate-100 px-2">
            <div data-aos="zoom-in" data-aos-duration="800" data-aos-anchor-placement="top-bottom" data-aos-delay="0">
                <h2 className="text-5xl text-center text-blue font-bold mb-4">FAQ&apos;s</h2>
                <p className="w-3/4 mx-auto text-center text-sm md:text-base text-tertiary mb-8">Have a question about our art and craft studio? Browse our frequently asked questions below. If you need more information, feel free to reach out to us directly.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="7000" data-aos-anchor-placement="top-bottom" data-aos-delay="50" tabIndex={0} className="rounded-b collapse collapse-arrow text-white bg-blue focus:bg-red">
                <div className="collapse-title text-xl font-medium">
                    Q: What types of art and craft items do you offer?
                </div>
                <div className="collapse-content">
                    <p>A: We specialize in a wide range of art and craft items, including paintings, drawings, sculptures, and more. Explore our collection to discover unique pieces crafted by talented artists.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="7000" data-aos-anchor-placement="top-bottom" data-aos-delay="50" tabIndex={0} className="rounded-none collapse collapse-arrow text-white bg-blue focus:bg-red">
                <div className="collapse-title text-xl font-medium">
                    Q: Can I request a custom art piece?
                </div>
                <div className="collapse-content">
                    <p>A: Yes, we offer custom art commissions tailored to your preferences. Whether you are looking for a personalized painting, sculpture, or textile artwork, our artists can bring your vision to life. Contact us for more details.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="7000" data-aos-anchor-placement="top-bottom" data-aos-delay="50" tabIndex={0} className="rounded-none collapse collapse-arrow text-white bg-blue focus:bg-red">
                <div className="collapse-title text-xl font-medium">
                    Q: How can I purchase art from your studio?
                </div>
                <div className="collapse-content">
                    <p>A: Purchasing art from us is easy! Browse our online gallery, select your favorite pieces, and add them to your cart. You can complete your purchase securely through our website. We also accept custom orders and commissions.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="7000" data-aos-anchor-placement="top-bottom" data-aos-delay="50" tabIndex={0} className="rounded-none collapse collapse-arrow text-white bg-blue focus:bg-red">
                <div className="collapse-title text-xl font-medium">
                    Q: Do you offer art classes or workshops?
                </div>
                <div className="collapse-content">
                    <p>A: Yes, we host art classes and workshops for enthusiasts of all skill levels. Join us to learn new techniques, explore different mediums, and unleash your creativity in a supportive environment. Check our site for upcoming sessions.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="7000" data-aos-anchor-placement="top-bottom" data-aos-delay="50" tabIndex={0} className="rounded-t mb-1 collapse collapse-arrow text-white bg-blue focus:bg-red">
                <div className="collapse-title text-xl font-medium">
                    Q: How can I get in touch with your studio?
                </div>
                <div className="collapse-content">
                    <p>A: Contacting us is simple! Reach out via phone, email, or through our website contact form. Our friendly team is ready to assist you with any inquiries about our art and craft offerings, events, or custom orders.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
