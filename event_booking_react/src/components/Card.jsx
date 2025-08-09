import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular, faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

function Card({ image, name, rating, price }) {
    return (
        <div className="relative bg-white rounded-[5px] shadow-md overflow-hidden max-w-xs hover:shadow-lg transition">
            <button className="absolute top-[10px] right-[5px] border-0 bg-transparent hover:text-red-500">
                <FontAwesomeIcon icon={faHeartRegular} size="lg" />
            </button>
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }, (_, i) => {
                        if (rating >= i + 1) {
                            return (<FontAwesomeIcon key={i} icon={faStarSolid} className="text-yellow-500" />);
                        } else if (rating >= i + 0.5) {
                            return (<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-500" />);
                        } else {
                            return (<FontAwesomeIcon key={i} icon={faStarRegular} className="text-gray-300" />);
                        }
                    })}
                    <span className="ml-2 text-sm text-gray-500">{rating}/5</span>
                </div>
                <p className="text-[#ff7a18] font-bold">₹{price}</p>
            </div>
        </div>
    );
}

export default Card;