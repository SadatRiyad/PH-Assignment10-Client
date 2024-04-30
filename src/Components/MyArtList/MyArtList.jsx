/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/AuthProvider/AuthProvider";
import MyArtListCard from "./MyArtListCard";
import { Link } from "react-router-dom";

const MyArtList = () => {
    const { user, render1 } = useContext(AuthContext);
    const { email } = user;
    const [craftItemData, setCraftItemData] = useState([]);
    const [sortOption, setSortOption] = useState("price");

    useEffect(() => {
        fetchArtCraftItems();
    }, [sortOption]);

    useEffect(() => {
        fetch(`http://localhost:5000/PaintingAndDrawing/myArtList/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setCraftItemData(data))
    }, [email, render1])


    const fetchArtCraftItems = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/PaintingAndDrawing/myArtList/${user.email}?sortBy=${sortOption}`
            );
            const data = await response.json();
            setCraftItemData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSort = (option) => {
        setSortOption(option);
    };

    return (
        <>
            <div className="py-20 mt-8 bg-color2" id="myArt">
                <div className="hero -mt-20 w-full h-[50vh]" style={{ backgroundImage: 'url(https://st3.depositphotos.com/1034582/34664/v/450/depositphotos_346643858-stock-illustration-banner-background-pastel-blue-low.jpg)' }}>
                    <div className="hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md text-blue">
                            <h1 className="mb-5 mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold">Hello <span className="text-red">{user.displayName},</span><br /></h1>
                            <p className="mb-5 text-xs px-2 text-black">
                                Welcome to <span className="font-bold">&quot;My Art &amp; Craft List,&quot;</span> your personalized gallery. Here, you can view and manage all the art and craft items you&apos;ve added.
                                Explore your collection, featuring your favorite artworks and crafts. Edit details, update images, or remove items as needed.
                                Your artistry, your control. Dive in and curate your showcase on <span className="font-bold">BB-Artistry.</span></p>
                            {
                                craftItemData.length !== 0 && <div className="flex justify-center">
                                    <p className="text-red font-bold">Your total Art & Craft Items = {craftItemData.length}</p>
                                </div>
                            }
                            <div className='flex justify-center mt-4 mb-8'>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn m-1 bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red transition-all duration-200">Sort by <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg></div>
                                    <ul tabIndex={0} className="dropdown-content z-[999] menu p-2 shadow w-44 bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  transition-all duration-200">
                                        <li onClick={() => { handleSort("price") }}><a>Sort by Price</a></li>
                                        <li onClick={() => { handleSort("rating") }}><a>Sort by Rating</a></li>
                                        <li onClick={() => { handleSort("processing_time") }}><a>Sort by Processing Time</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-start mt-8 md:mt-20">
                    {
                        craftItemData.length === 0 && <div className="bg-base-200 px-6 py-12 md:p-12 ">
                            <h1 className="text-center px-5 md:px-12 text-xl md:2xl lg:3xl font-bold text-red">Hey there! <br /> It looks like you haven&apos;t added any art or craft items yet. <br /> Why not get started and showcase your creativity? <br /> Click the button below to add your first piece of <br /> art or craft to your personalized gallery. <br /> We can&apos;t wait to see what you create!</h1>
                            <div className="flex justify-center mt-8">
                                <Link to="/addCraft" className="btn btn-primary bg-red border-red text-white hover:bg-red hover:border-red hover:-translate-y-1">Add Art & Craft</Link>
                            </div>
                        </div>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full pt-24 px-4">

                        {craftItemData?.map((craftItemData) => (
                            <MyArtListCard key={craftItemData._id}
                                craftItemData={craftItemData}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default MyArtList;