import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell as faBellRegular, faUserCircle as faUserCircleRegular } from "@fortawesome/free-regular-svg-icons";
import NavMenu from "./NavMenu";

function Header() {
    return (
        <>
            <header className="bg-[#474554] shadow-md flex items-center justify-between py-[15px] px-[30px] gap-[20px]">
                <div className="font-[500] text-[27px] text-[whitesmoke]">
                    EventHub<span className="text-black text-[18px]">.com</span>
                </div>

                <div className="w-1/2 relative">
                    <input
                        type="text"
                        placeholder="Search events..."
                        className="box-border w-full p-[10px] pr-[40px] border border-gray-300 rounded-[3em] focus:outline-none focus:ring-2 focus:ring-[#cfcfcf] text-[16px]"
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="absolute right-[10px] top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer text-[#626262] text-[17px]" />
                </div>

                <div className="flex items-center gap-[10px] text-gray-600">
                    <FontAwesomeIcon icon={faBellRegular} size="lg" className="cursor-pointer hover:text-[#aca7cb] text-[whitesmoke]" />
                    <FontAwesomeIcon icon={faUserCircleRegular} size="lg" className="cursor-pointer hover:text-[#aca7cb] text-[whitesmoke]" />
                </div>
            </header>
            <NavMenu />
        </>
    );
}

export default Header;