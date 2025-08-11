import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "./Breadcrumb";

const MarriageHall = () => {
    const navigate = useNavigate();
    const [minPrice, setMinPrice] = useState(5000);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isRatingOpen, setIsRatingOpen] = useState(false);
    const [isHallTypeOpen, setIsHallTypeOpen] = useState(false);
    const [isHallCapacityOpen, setIsHallCapacityOpen] = useState(false);
    const [isDiningCapacityOpen, setIsDiningCapacityOpen] = useState(false);
    const [maxHallCapacity, setMaxHallCapacity] = useState(10000);
    const [maxDiningCapacity, setMaxDiningCapacity] = useState(10000);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedHallType, setSelectedHallType] = useState([]);
    const districts = ["Chennai", "Coimbatore", "Madurai", "Salem", "Thanjavur", "Trichy"];
    const ratings = ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐", "⭐"];
    const hallTypes = ["AC Hall", "Non-AC Hall"];
    const handleDistrictCheckboxChange = (district) => {
        setSelectedLocations((prev) =>
            prev.includes(district)
                ? prev.filter((item) => item !== district)
                : [...prev, district]
        );
    };
    const handleRatingCheckboxChange = (rating) => {
        setSelectedRatings((prev) =>
            prev.includes(rating)
                ? prev.filter((item) => item !== rating)
                : [...prev, rating]
        );
    };
    const handleHallTypeCheckboxChange = (halltype) => {
        setSelectedHallType((prev) =>
            prev.includes(halltype)
                ? prev.filter((item) => item !== halltype)
                : [...prev, halltype]
        );
    };
    const handleMinChange = (e) => {
        const value = Number(e.target.value);
        if (value < maxPrice) setMinPrice(value);
    };
    
    const handleMaxChange = (e) => {
        const value = Number(e.target.value);
        if (value > minPrice) setMaxPrice(value);
    };
    
    const handleMaxHallCapacity = (e) => {
        const value = Number(e.target.value);
        if (value < maxPrice) setMaxHallCapacity(value);
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
                    <div className="pb-[15px] mt-[10px] border-b-[1px] border-[#c1c1c1]">
                        <div className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsPriceOpen(!isPriceOpen)}
                        >
                            <label className="block text-[14px] font-medium">Price</label>
                            <FontAwesomeIcon icon={isPriceOpen ? faAngleUp : faAngleDown} />
                        </div>
                        {isPriceOpen && (
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
                    <div className="py-[15px] border-b-[1px] border-[#c1c1c1]">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsLocationOpen(!isLocationOpen)}
                        >
                            <label className="block text-[14px] font-medium">Location</label>
                            <FontAwesomeIcon icon={isLocationOpen ? faAngleUp : faAngleDown} />
                        </div>
                        {isLocationOpen && (
                            <div className="mt-[20px] space-y-[10px]">
                                {districts.map((district) => (
                                    <label key={district} className="flex items-center text-[14px] text-gray-700">
                                        <input
                                            type="checkbox"
                                            className="mr-[8px]"
                                            checked={selectedLocations.includes(district)}
                                            onChange={() => handleDistrictCheckboxChange(district)}
                                        />
                                        {district}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="py-[15px] border-b-[1px] border-[#c1c1c1]">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsRatingOpen(!isRatingOpen)}
                        >
                            <label className="block text-[14px] font-medium">Rating</label>
                            <FontAwesomeIcon icon={isRatingOpen ? faAngleUp : faAngleDown} />
                        </div>
                        {isRatingOpen && (
                            <div className="mt-[20px] space-y-[10px]">
                                {ratings.map((rating) => (
                                    <label key={rating} className="flex items-center text-[14px] text-gray-700">
                                        <input
                                            type="checkbox"
                                            className="mr-[8px]"
                                            checked={selectedRatings.includes(rating)}
                                            onChange={() => handleRatingCheckboxChange(rating)}
                                        />
                                        {rating}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="py-[15px] border-b-[1px] border-[#c1c1c1]">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsHallTypeOpen(!isHallTypeOpen)}
                        >
                            <label className="block text-[14px] font-medium">Hall Type</label>
                            <FontAwesomeIcon icon={isHallTypeOpen ? faAngleUp : faAngleDown} />
                        </div>
                        {isHallTypeOpen && (
                            <div className="mt-[20px] space-y-[10px]">
                                {hallTypes.map((halltype) => (
                                    <label key={halltype} className="flex items-center text-[14px] text-gray-700">
                                        <input
                                            type="checkbox"
                                            className="mr-[8px]"
                                            checked={selectedHallType.includes(halltype)}
                                            onChange={() => handleHallTypeCheckboxChange(halltype)}
                                        />
                                        {halltype}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="pb-[15px] mt-[10px] border-b-[1px] border-[#c1c1c1]">
                        <div className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsHallCapacityOpen(!isHallCapacityOpen)}
                        >
                            <label className="block text-[14px] font-medium">Hall Seat Capacity</label>
                            <FontAwesomeIcon icon={isHallCapacityOpen ? faAngleUp : faAngleDown} />
                        </div>
                        {isHallCapacityOpen && (
                            <>
                                <div className="flex justify-between text-[14px] text-gray-600 mt-[20px] mb-[10px]">
                                    <span>₹{maxHallCapacity.toLocaleString()}</span>
                                </div>
                                <div className="relative w-full h-[30px]">
                                    <input
                                        type="range"
                                        min="100"
                                        max="10000"
                                        step="100"
                                        value={maxHallCapacity}
                                        onChange={handleMaxHallCapacity}
                                        className="absolute w-full pointer-events-none bg-[#c6e4ff] rounded-full outline-none appearance-none [&::-webkit-slider-thumb]:pointer-events-auto"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    {/* Button */}
                    <div className="mt-[20px] text-right">
                        <button className="px-[20px] py-[10px] text-[15px] bg-[#068488] border-none rounded-[3px] text-[whitesmoke] cursor-pointer hover:bg-[#046568] transition">Apply</button>
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
