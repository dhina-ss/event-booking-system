import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="shadow-lg rounded-[10px] w-full bg-[#c4c7cc] max-w-[30%] p-[20px]">

                {/* Heading */}
                <div className="mb-6 text-center">
                    <h3 className="text-[30px] font-bold">Welcome Back</h3>
                    <p className="text-gray-500 text-sm mt-1">
                        Please login to your account
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-[10px]">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="box-border w-full text-[15px] p-[10px] mb-[15px] border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#c3c3c3]"
                    />
                    <div className="relative mb-[10px]">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="box-border w-full text-[15px] p-[10px] mb-[15px] border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#c3c3c3]"
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            className="absolute right-[8px] top-[25%] text-gray-500 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>
                    <div className="text-right text-[14px] mb-4">
                        <a href="#" className="text-sm text-gray-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-[10px] outline-none border-none rounded-[5px] mb-[15px] tracking-[1px] text-[15px] text-[white] bg-[#474554] hover:opacity-90 transition cursor-pointer"
                    >
                        Login
                    </button>

                </form>

                {/* Divider */}
                <div className="flex items-center my-6 mb-[15px]">
                    <hr className="flex-1 border-gray-300" />
                    <span className="text-gray-400 text-sm mx-[10px]">Or Login with</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Social Login */}
                <div className="flex gap-[10px]">
                    <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-[5px] p-[10px] w-full hover:bg-gray-50 transition cursor-pointer">
                        <FontAwesomeIcon icon={faGoogle} size="lg" />
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-[5px] p-[10px] w-full hover:bg-gray-50 transition cursor-pointer">
                        <FontAwesomeIcon icon={faFacebook} size="lg" className="text-blue-600" />
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-[5px] p-[10px] w-full hover:bg-gray-50 transition cursor-pointer">
                        <FontAwesomeIcon icon={faYoutube} size="lg" className="text-blue-600" />
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-[5px] p-[10px] w-full hover:bg-gray-50 transition cursor-pointer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-blue-600" />
                    </button>
                </div>

                {/* Signup */}
                <p className="text-center text-[14px] text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <a href="#" className="hover:underline text-[14px]">
                        Signup
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
