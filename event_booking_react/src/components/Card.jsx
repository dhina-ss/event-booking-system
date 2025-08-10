import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular, faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";


function Card({ image, name, rating, price }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="relative bg-white rounded-[5px] shadow-md overflow-hidden max-w-xs hover:shadow-lg transition">
            <button
                onClick={() => setLiked(!liked)}
                className="absolute top-[10px] right-[5px] border-0 bg-transparent hover:text-red-500 transition cursor-pointer"
            >
                <FontAwesomeIcon
                    icon={liked ? faHeartSolid : faHeartRegular}
                    size="lg"
                    className={liked ? "text-[red]" : "text-gray-500"}
                />
            </button>
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <p className="text-[#ff7a18] font-bold">₹{price}</p>
                    <button className="rounded-[5px] border border-[#9a95b3] p-[10px] bg-[#c8c5d8] text-[15px] cursor-pointer hover:bg-[#9a95b3] transition">
                        View Details
                    </button>
                </div>
                    <div className="flex items-center mb-2 mt-[20px]">
                        {Array.from({ length: 5 }, (_, i) => {
                            if (rating >= i + 1) {
                                return (<FontAwesomeIcon key={i} icon={faStarSolid} className="text-yellow-500" />);
                            } else if (rating >= i + 0.5) {
                                return (<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-500" />);
                            } else {
                                return (<FontAwesomeIcon key={i} icon={faStarRegular} className="text-gray-300" />);
                            }
                        })}
                    </div>
            </div>
        </div>
    );
}

export default Card;