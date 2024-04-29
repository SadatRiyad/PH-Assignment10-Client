import { useContext, useState } from 'react';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';


const AddCraft = () => {
    const { auth, setRender1, render1 } = useContext(AuthContext);
    const currentUser = auth.currentUser;

    const [formData, setFormData] = useState({
        image: '',
        item_name: '',
        subcategory_Name: '',
        short_description: '',
        price: '',
        rating: '',
        customization: '',
        processing_time: '',
        stockStatus: '',
        userEmail: `${currentUser?.email}`,
        userName: `${currentUser?.displayName}`,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);

        // Add Craft Item to Database
        fetch('http://localhost:5000/PaintingAndDrawing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Craft item added successfully!', { type: "success", autoClose: 2000 });
                    setRender1(!render1);

                } else {
                    console.log(data);
                }
            })


        // Reset form fields after submission
        setFormData({
            image: '',
            item_name: '',
            subcategory_Name: '',
            short_description: '',
            price: '',
            rating: '',
            customization: '',
            processing_time: '',
            stockStatus: '',
            userEmail: `${currentUser?.email}`,
            userName: `${currentUser?.displayName}`,
        });
    };

    return (
        <div className="hero card-body px-4 md:px-12 min-h-screen bg-red">
            <Helmet>
                <title>Add Craft Item | BB-Artistry</title>
            </Helmet>
            <div className="justify-center flex w-full">
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card px-6 shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="flex justify-center w-full mt-8">
                        <div>
                            <h5 className="font-bold text-3xl md:text-4xl text-center mb-8 mt-3">Add New Craft Item...</h5>
                            <p className='text-sm font-semibold text-center px-4'>Hello <span className='text-red capitalize font-extrabold'>{currentUser?.displayName}</span>, Your Name and Your Email <span className='text-red font-extrabold'>{currentUser?.email}</span> is used to Add Craft Item, <br />Now, Fill in the details below to add a new craft item to the site.</p>
                            <p className='mb-6 text-sm font-semibold text-center text-red mt-2'>Note: All fields are required.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label label-text">Image URL:</label>
                            <input
                                type="text"
                                className="form-control input w-full input-bordered mt-1"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder='https://example.com/image.jpg'
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="item_name" className="form-label label-text">Item Name:</label>
                            <input
                                type="text"
                                className="form-control input w-full input-bordered mt-1"
                                id="item_name"
                                name="item_name"
                                value={formData.item_name}
                                onChange={handleChange}
                                placeholder='Craft Item Name'
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subcategory_Name" className="form-label label-text">Subcategory Name:</label>
                            <select
                                className="form-control input w-full input-bordered mt-1 py-2"
                                id="subcategory_Name"
                                name="subcategory_Name"
                                value={formData.subcategory_Name}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Subcategory</option>
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="short_description" className="form-label label-text">Short Description:</label>
                            <textarea
                                className="form-control w-full input input-bordered mt-1 py-2"
                                id="short_description"
                                name="short_description"
                                value={formData.short_description}
                                onChange={handleChange}
                                placeholder='Short Description of Craft Item...'
                                required
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label label-text">Price:</label>
                            <input
                                type="number"
                                className="form-control w-full input input-bordered mt-1"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder='Price of Craft Item in USD'
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label label-text">Rating:</label>
                            <input
                                type="number"
                                className="form-control w-full input input-bordered mt-1"
                                id="rating"
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                placeholder='Example: 4.7 out of 5'
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="customization" className="form-label label-text">Customization:</label>
                            <select
                                className="form-control w-full input input-bordered mt-1 py-2"
                                id="customization"
                                name="customization"
                                value={formData.customization}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Customization</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="processing_time" className="form-label label-text">Processing Time:</label>
                            <input
                                type="text"
                                className="form-control input w-full input-bordered mt-1"
                                id="processing_time"
                                name="processing_time"
                                value={formData.processing_time}
                                onChange={handleChange}
                                placeholder='5 days, 7 days, etc.'
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stockStatus" className="form-label label-text">Stock Status:</label>
                            <select
                                className="form-control w-full input input-bordered mt-1 py-2"
                                id="stockStatus"
                                name="stockStatus"
                                value={formData.stockStatus}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Stock Status</option>
                                <option value="In stock">In Stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </div>
                        <button type="submit" className="btn mb-8 mt-2 bg-red w-full text-white hover:bg-transparent hover:text-red hover:border-red bprder-red">Add Craft Item</button>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default AddCraft;