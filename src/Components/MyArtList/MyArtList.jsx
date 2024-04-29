import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/AuthProvider/AuthProvider";
import MyArtListCard from "./MyArtListCard";

const MyArtList = () => {
    const { user } = useContext(AuthContext);
    const { email } = user;
    const [craftItemData, setCraftItemData] = useState([]);
    // console.log(user)
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
    }, [email])
    return (
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
                    </div>
                </div>
            </div>
            <div className="text-start mt-8 md:mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">

                    {craftItemData?.map((craftItemData) => (
                        <MyArtListCard key={craftItemData._id} craftItemData={craftItemData} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default MyArtList;