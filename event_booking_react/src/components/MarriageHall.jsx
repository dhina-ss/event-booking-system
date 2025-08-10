import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MarriageHall = () => {
    const navigate = useNavigate();

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
            <div className="flex">
                <h2 className="text-[24px] mb-[10px] w-[25%] pl-[15px]">Filters</h2>
                <h2 className="text-[24px] mb-[20px]">Marriage Halls ({halls.length})</h2>
            </div>
            {/* 12-column grid */}
            <div className="grid grid-cols-12 gap-[20px]">

                {/* Filter Section */}
                <div className="col-span-3 bg-white shadow-md p-[15px] rounded-[10px] border border-[#c1c1c1]">
                    <div className="mb-[15px]">
                        <label className="block text-[14px] font-medium mb-[5px]">Price Range</label>
                        <input type="range" min="10000" max="50000" className="w-full" />
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
                            onClick={() => navigate(`/halls/${hall.id}`)}
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
