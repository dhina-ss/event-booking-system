import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell as faBellRegular, faUserCircle as faUserCircleRegular } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { faLandmark, faCameraRetro, faCar, faHouse, faWandMagicSparkles, faBurger, faClover } from "@fortawesome/free-solid-svg-icons";


function Header() {
    const navigate = useNavigate();
    const menuItems = [
        { name: "Home", icon: faHouse, link: "/" },
        { name: "Marriage Hall", icon: faLandmark, link: "/marriage-hall" },
        { name: "Catering", icon: faBurger, link: "/catering" },
        { name: "Photograph", icon: faCameraRetro, link: "/photograph" },
        { name: "Travels", icon: faCar, link: "/travels" },
        { name: "Decorations", icon: faClover, link: "/decorations" },
        { name: "Bridal", icon: faWandMagicSparkles, link: "/bridal" },
    ];

    return (
        <>
            <header className="bg-[#474554] shadow-md flex items-center justify-between py-[10px] px-[30px] gap-[20px]">
                <div className="font-[500] text-[27px] text-[whitesmoke]">
                    EventHub<span className="text-black text-[18px]">.com</span>
                </div>

                <nav className="text-[whitesmoke]">
                    <ul className="flex items-center justify-left gap-[20px] my-[0] py-[15px] px-[30px]">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-[5px] cursor-pointer hover:text-[#d7d7d7] transition"
                                onClick={() => navigate(item.link)}
                            >
                                <FontAwesomeIcon icon={item.icon} className='text-[15px]' />
                                <div>{item.name}</div>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-[10px] text-gray-600">
                    <FontAwesomeIcon icon={faBellRegular} size="lg" className="cursor-pointer hover:text-[#aca7cb] text-[whitesmoke]" />
                    <FontAwesomeIcon icon={faUserCircleRegular} size="lg" className="cursor-pointer hover:text-[#aca7cb] text-[whitesmoke]" />
                </div>
            </header>
        </>
    );
}

export default Header;