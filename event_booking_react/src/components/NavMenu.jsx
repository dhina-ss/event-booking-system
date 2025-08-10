import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLandmark, faCameraRetro, faCar, faHouse,
	faWandMagicSparkles, faBurger, faClover
} from "@fortawesome/free-solid-svg-icons";

function NavMenu() {
	const navigate = useNavigate();
	const menuItems = [
		{ name: "Home", icon: faHouse, link:"/" },
		{ name: "Marriage Hall", icon: faLandmark, link: "/marriage-hall" },
		{ name: "Catering", icon: faBurger, link: "/catering" },
		{ name: "Photograph", icon: faCameraRetro, link: "/photograph" },
		{ name: "Travels", icon: faCar, link: "/travels" },
		{ name: "Decorations", icon: faClover, link: "/decorations" },
		{ name: "Bridal", icon: faWandMagicSparkles, link: "/bridal" },
	];

	return (
		<nav className="bg-[#e3e3e3] text-[#484848]">
			<ul className="flex items-center justify-left gap-[20px] my-[0] py-[15px] px-[30px]">
				{menuItems.map((item, index) => (
					<li
						key={index}
						className="flex items-center gap-[5px] cursor-pointer hover:text-[#3c3d3e] transition"
						onClick={() => navigate(item.link)}
					>
						<FontAwesomeIcon icon={item.icon} className='text-[15px]' />
						<div>{item.name}</div>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default NavMenu
