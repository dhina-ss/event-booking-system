import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-[14px] text-gray-500 mb-[20px]">
      {items.map((item, index) => (
        <span key={index}>
          {item.link ? (
            <Link to={item.link} className="hover:text-[#ff7a18]">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-700 font-semibold">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-[8px]">/</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
