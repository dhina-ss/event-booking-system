import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const MarriageHallPage = () => {
    const hall = {
        name: "Royal Palace Hall",
        rating: 4.5,
        price: "₹25,000 per day",
        location: "Chennai, Tamil Nadu",
        phone: "+91 98765 43210",
        description:
            "Royal Palace Hall is an elegant venue perfect for weddings, receptions, and grand celebrations. With a spacious interior, luxurious decor, and top-notch services, it ensures your special day is unforgettable.",
        facilities: [
            "Air Conditioning",
            "Car Parking",
            "Catering Services",
            "Stage Decoration",
            "Sound System",
            "Changing Rooms",
        ],
        image: "https://placehold.co/800x500?text=Marriage+Hall",
    };

    const relatedHalls = [
        { id: 1, name: "Golden Crown Hall", image: "https://placehold.co/300x200", price: "₹20,000/day" },
        { id: 2, name: "Emerald Banquet", image: "https://placehold.co/300x200", price: "₹22,500/day" },
        { id: 3, name: "Grand Celebration Hall", image: "https://placehold.co/300x200", price: "₹18,000/day" },
    ];

    return (
        <div className="max-w-[1200px] mx-auto p-[20px]">
            <div className="flex gap-[20px]">
                <div className="lg:col-span-8">
                    <img
                        src={hall.image}
                        alt={hall.name}
                        className="w-full rounded-[10px] object-cover"
                    />
                </div>
                <div className="lg:col-span-4 bg-white shadow-lg rounded-[10px] p-[20px]">
                    <h1 className="text-[24px] font-bold mb-[10px]">{hall.name}</h1>
                    <div className="flex items-center mb-[10px]">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FontAwesomeIcon
                                key={i}
                                icon={faStar}
                                className={i < Math.floor(hall.rating) ? "text-yellow-500" : "text-gray-300"}
                            />
                        ))}
                        <span className="ml-[8px] text-[14px] text-gray-500">{hall.rating}/5</span>
                    </div>
                    <p className="text-green-600 font-semibold text-[18px] mb-[10px]">{hall.price}</p>
                    <p className="flex items-center text-gray-600 mb-[20px]">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-[8px]" />
                        {hall.location}
                    </p>
                    <button className="w-full bg-[#ff7a18] hover:bg-[#e56d15] text-white p-[10px] rounded-[5px] mb-[20px] cursor-pointer">
                        <FontAwesomeIcon icon={faPhone} className="mr-[8px]" />
                        Book Now
                    </button>
                    <h2 className="text-[18px] font-semibold mb-[10px]">Facilities</h2>
                    <ul className="list-disc list-inside text-[14px] space-y-[4px]">
                        {hall.facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-[30px]">
                <h2 className="text-[20px] font-semibold mb-[10px]">Description</h2>
                <p className="text-[15px] leading-[24px] mb-[30px]">{hall.description}</p>
                <h2 className="text-[20px] font-semibold mb-[15px]">Related Halls</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
                    {relatedHalls.map((item) => (
                        <div key={item.id} className="bg-white shadow-md rounded-[10px] overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-[180px] object-cover" />
                            <div className="p-[10px]">
                                <h3 className="text-[16px] font-semibold">{item.name}</h3>
                                <p className="text-green-600 text-[14px]">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarriageHallPage;
