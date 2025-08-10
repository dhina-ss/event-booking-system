import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "./Breadcrumb";

const MarriageHall = () => {
    const navigate = useNavigate();
    const [minPrice, setMinPrice] = useState(5000);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [isOpen, setIsOpen] = useState(false);
    const handleMinChange = (e) => {
        const value = Number(e.target.value);
        if (value < maxPrice) setMinPrice(value);
    };

    const handleMaxChange = (e) => {
        const value = Number(e.target.value);
        if (value > minPrice) setMaxPrice(value);
    };
    const halls = [
        {
            id: 1,
            name: "Royal Palace Hall",
            rating: 4.5,
            price: "₹25,000/day",
            location: "Chennai, Tamil Nadu",
            ac: true,
            image: "https://placehold.co/400x250?text=Royal+Palace",
        },
        {
            id: 2,
            name: "Golden Crown Hall",
            rating: 4.2,
            price: "₹20,000/day",
            location: "Coimbatore, Tamil Nadu",
            ac: false,
            image: "https://placehold.co/400x250?text=Golden+Crown",
        },
        {
            id: 3,
            name: "Emerald Banquet",
            rating: 4.7,
            price: "₹22,500/day",
            location: "Madurai, Tamil Nadu",
            ac: true,
            image: "https://placehold.co/400x250?text=Emerald+Banquet",
        },
        {
            id: 4,
            name: "Grand Celebration Hall",
            rating: 4.0,
            price: "₹18,000/day",
            location: "Salem, Tamil Nadu",
            ac: false,
            image: "https://placehold.co/400x250?text=Grand+Celebration",
        },
    ];

    return (
        <div className="max-w-[1200px] mx-auto p-[20px]">
            <Breadcrumb
                items={[
                    { label: "Home", link: "/" },
                    { label: "Marriage Halls", link: "/marriage-hall" }
                ]}
            />
            <div className="flex">
                <h2 className="text-[20px] mb-[10px] w-[25%] pl-[15px]">Filters</h2>
                <h2 className="text-[24px] mb-[20px]">Marriage Halls ({halls.length})</h2>
            </div>
            {/* 12-column grid */}
            <div className="grid grid-cols-12 gap-[20px]">

                {/* Filter Section */}
                <div className="col-span-3 bg-white shadow-md p-[15px] rounded-[10px] border border-[#c1c1c1]">
                    <div className="pb-[15px] border-b-[1px] border-[#c1c1c1]">
                        <div className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <label className="block text-[14px] font-medium">
                                Price Range
                            </label>
                            <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
                        </div>
                        {isOpen && (
                            <>
                                <div className="flex justify-between text-[14px] text-gray-600 mt-[20px] mb-[10px]">
                                    <span>₹{minPrice.toLocaleString()}</span>
                                    <span>₹{maxPrice.toLocaleString()}</span>
                                </div>
                                <div className="relative w-full h-[30px]">
                                    <input
                                        type="range"
                                        min="5000"
                                        max="1000000"
                                        step="5000"
                                        value={minPrice}
                                        onChange={handleMinChange}
                                        className="absolute w-full pointer-events-none bg-[#c6e4ff] rounded-full outline-none appearance-none [&::-webkit-slider-thumb]:pointer-events-auto"
                                    />
                                    <input
                                        type="range"
                                        min="5000"
                                        max="1000000"
                                        step="5000"
                                        value={maxPrice}
                                        onChange={handleMaxChange}
                                        className="absolute w-full pointer-events-none appearance-none outline-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="mb-[15px]">
                        <label className="block text-[14px] font-medium mb-[5px]">Location</label>
                        <select className="w-full border border-gray-300 p-[5px] rounded">
                            <option>All</option>
                            <option>Chennai</option>
                            <option>Coimbatore</option>
                            <option>Madurai</option>
                            <option>Salem</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[14px] font-medium mb-[5px]">Rating</label>
                        <select className="w-full border border-gray-300 p-[5px] rounded">
                            <option>All</option>
                            <option>4+ stars</option>
                            <option>3+ stars</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[14px] font-medium mb-[5px]">Hall Type</label>
                        <div className="space-y-[5px]">
                            <label className="flex items-center space-x-[8px]">
                                <input type="checkbox" className="w-[16px] h-[16px]" />
                                <span>AC Hall</span>
                            </label>
                            <label className="flex items-center space-x-[8px]">
                                <input type="checkbox" className="w-[16px] h-[16px]" />
                                <span>Non-AC Hall</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Hall List Section */}
                <div className="col-span-9 grid grid-cols-3 gap-[20px]">
                    {halls.map((hall) => (
                        <div
                            key={hall.id}
                            onClick={() => navigate(`/marriage-hall/${hall.id}`)}
                            className="bg-white shadow-md rounded-[10px] overflow-hidden cursor-pointer hover:shadow-lg transition"
                        >
                            <img
                                src={hall.image}
                                alt={hall.name}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="p-[15px]">
                                <h2 className="text-[18px] font-semibold mb-[8px]">{hall.name}</h2>
                                <div className="flex items-center mb-[8px]">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <FontAwesomeIcon
                                            key={i}
                                            icon={faStar}
                                            className={i < Math.floor(hall.rating) ? "text-yellow-500" : "text-gray-300"}
                                        />
                                    ))}
                                    <span className="ml-[8px] text-[14px] text-gray-500">{hall.rating}/5</span>
                                </div>
                                <p className="text-green-600 font-semibold mb-[5px]">{hall.price}</p>
                                <p className="text-gray-500 text-[14px]">{hall.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MarriageHall;
