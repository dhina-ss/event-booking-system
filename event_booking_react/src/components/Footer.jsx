import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-[#ddc2b3] text-gray-300 py-[30px] mt-[20px]">
            <div className="max-w-[1280px] mx-auto px-[24px] flex flex-wrap gap-[30px]">

                {/* About Section */}
                <div>
                    <h3 className="text-white text-[20px] font-semibold mb-[16px]">About Us</h3>
                    <p className="text-[14px] leading-[20px]">
                        We are a leading e-commerce platform providing fresh fruits and
                        quality products delivered to your doorstep.
                    </p>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-white text-[20px] font-semibold mb-[16px]">Customer Service</h3>
                    <ul className="space-y-[8px] text-[14px] list-none px-[15px]">
                        <li><a href="/help" className="hover:text-white">Help Center</a></li>
                        <li><a href="/returns" className="hover:text-white">Returns</a></li>
                        <li><a href="/shipping" className="hover:text-white">Shipping Info</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white text-[20px] font-semibold mb-[16px]">Quick Links</h3>
                    <ul className="space-y-[8px] text-[14px] list-none px-[15px]">
                        <li><a href="/products" className="hover:text-white">Products</a></li>
                        <li><a href="/cart" className="hover:text-white">Cart</a></li>
                        <li><a href="/checkout" className="hover:text-white">Checkout</a></li>
                        <li><a href="/login" className="hover:text-white">Login</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-white text-[20px] font-semibold mb-[16px]">Follow Us</h3>
                    <div className="flex space-x-[16px] text-[18px]">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="hover:text-white"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                            className="hover:text-white"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="hover:text-white"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-white"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-[30px] border-t border-gray-700 pt-[24px] text-center text-[12px] text-gray-500">
                &copy; {new Date().getFullYear()} EventHub.com. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
