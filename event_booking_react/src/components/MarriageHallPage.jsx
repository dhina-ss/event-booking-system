import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";


const MarriageHallPage = () => {
    const hall = {
        name: "Royal Palace Hall",
        rating: 4.5,
        sales_count: 13,
        discount_price: "25,000",
        original_price: "30,000",
        location: "Chennai, Tamil Nadu",
        phone: "+91 98765 43210",
        description:
            "Royal Palace Hall is an elegant venue perfect for weddings, receptions, and grand celebrations. With a spacious interior, luxurious decor, and top-notch services, it ensures your special day is unforgettable.",
        facilities: {
            hallSeatCapacity: "800 - 1000",
            diningSeatCapacity: "450 - 500",
            acHall: "Yes",
            acDining: "Yes",
            parking: "Yes",
            soundSystem: "Yes",
            stage: "Yes",
        },

        image: "https://placehold.co/800x500?text=Marriage+Hall",
        gallery: [
            "https://placehold.co/150x100?text=View+1",
            "https://placehold.co/150x100?text=View+2",
            "https://placehold.co/150x100?text=View+3",
            "https://placehold.co/150x100?text=View+4",
            "https://placehold.co/150x100?text=View+5",
        ],
    };

    const relatedHalls = [
        { id: 1, name: "Golden Crown Hall", image: "https://placehold.co/300x200", price: "₹20,000/day" },
        { id: 2, name: "Emerald Banquet", image: "https://placehold.co/300x200", price: "₹22,500/day" },
        { id: 3, name: "Grand Celebration Hall", image: "https://placehold.co/300x200", price: "₹18,000/day" },
    ];

    return (
        <div className="max-w-[1200px] mx-auto p-[20px]">
            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    { label: "Home", link: "/" },
                    { label: "Marriage Halls", link: "/halls" },
                    { label: hall.name }
                ]}
            />

            {/* Top Section */}
            <div className="flex gap-[40px]">
                {/* Left col-7 */}
                <div className="w-[60%]">
                    {/* Main Hall Image */}
                    <img
                        src={hall.image}
                        alt={hall.name}
                        className="w-full rounded-[10px] object-cover mb-[10px]"
                    />

                    {/* Gallery Thumbnails */}
                    <div className="flex gap-[10px] overflow-x-auto">
                        {hall.gallery.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-[120px] h-[80px] object-cover rounded-[5px] cursor-pointer hover:opacity-80"
                            />
                        ))}
                    </div>
                </div>

                <div className="w-[40%]">
                    <h1 className="text-[24px] font-[500] mb-[20px]">{hall.name}</h1>

                    {/* Ratings */}
                    <div className="flex items-center mb-[20px]">
                        {Array.from({ length: 5 }, (_, i) => {
                            if (hall.rating >= i + 1) {
                                return (<FontAwesomeIcon key={i} icon={faStarSolid} className="text-[orange]" />);
                            } else if (hall.rating >= i + 0.5) {
                                return (<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-[orange]" />);
                            } else {
                                return (<FontAwesomeIcon key={i} icon={faStarRegular} className="text-[gray]" />);
                            }
                        })}
                        <span className="ml-[8px] text-[14px] text-gray-500">({hall.sales_count})</span>
                    </div>

                    {/* Discount Price */}
                    <div className="flex mb-[20px] gap-[20px]">
                        <p className="text-[16px] m-[0]">₹ {hall.discount_price}/day</p>
                        <p className="text-[16px] line-through m-[0]">₹ {hall.original_price}</p>
                    </div>

                    {/* Location */}
                    <p className="flex items-center text-gray-600 mb-[20px]">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-[2px]" />
                        {hall.location}
                    </p>
                    <p className="text-[15px] leading-[24px] mb-[20px]">{hall.description}</p>
                    <div className="flex gap-[20px] mb-[20px]">
                        <button className="w-full bg-[#068488] hover:bg-[#036f72] text-[white] px-[10px] py-[15px] rounded-[5px] border-none cursor-pointer">
                            Add to Wishlist
                        </button>
                        <button className="w-full bg-[#068488] hover:bg-[#036f72] text-[white] px-[10px] py-[15px] rounded-[5px] border-none cursor-pointer">
                            Add to Compare
                        </button>
                    </div>

                    {/* Book Button */}
                    <button className="w-full bg-[#ff7a18] hover:bg-[#e56d15] text-[white] px-[10px] py-[15px] rounded-[5px] border-none cursor-pointer">
                        Book Now
                    </button>

                </div>
            </div>

            {/* Description */}
            <div className="mt-[30px]">
                <h2 className="text-[20px] font-semibold mb-[10px]">Description</h2>
                <p className="text-[15px] leading-[24px] mb-[30px]">{hall.description}</p>

                {/* Facilities */}
                <h2 className="text-[18px] font-semibold mb-[10px]">Facilities</h2>
                <table className="w-full text-[14px] mb-[30px]">
                    <tbody>
                        {Object.entries(hall.facilities).map(([key, value], index) => (
                            <tr
                                key={key}
                                className={`${index % 2 === 0 ? "bg-[#e3e3e3]" : "bg-[transparent]"}`}
                            >
                                <td className="p-[10px] font-medium capitalize">
                                    {key
                                        .replace(/([A-Z])/g, " $1") // Add space before capital letters
                                        .replace(/^./, str => str.toUpperCase())} {/* Capitalize first letter */}
                                </td>
                                <td className="p-[10px]">{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                {/* Related Halls */}
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
