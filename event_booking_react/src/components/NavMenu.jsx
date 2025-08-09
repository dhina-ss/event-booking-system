import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faCameraRetro, faCar, faHouse, 
    faWandMagicSparkles, faBurger, faClover  } from "@fortawesome/free-solid-svg-icons";

function NavMenu() {
    const menuItems = [
    { name: "Home", icon: faHouse },
    { name: "Marriage Hall", icon: faLandmark },
    { name: "Catering", icon: faBurger },
    { name: "Photograph", icon: faCameraRetro },
    { name: "Travels", icon: faCar },
    { name: "Decorations", icon: faClover },
    { name: "Bridal", icon: faWandMagicSparkles },
  ];

  return (
    <nav className="bg-[#c8c5d8] text-white">
      <ul className="flex items-center justify-left gap-[20px] my-[0] py-[15px] px-[30px]">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-[5px] cursor-pointer hover:text-[#3c3d3e] transition"
          >
            <FontAwesomeIcon icon={item.icon} />
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu
