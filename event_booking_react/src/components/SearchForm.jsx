import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    const locationOptions = [
        "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode",
        "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", 
        "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet",
        "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli",
        "Tirunelveli", "Tirupattur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
        "Viluppuram", "Virudhunagar",
    ];

    const [query, setQuery] = useState("");
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Handle search input
    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setFilteredLocations([]);
            setShowSuggestions(false);
        } else {
            const filtered = locationOptions.filter((loc) =>
                loc.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredLocations(filtered);
            setShowSuggestions(true);
        }
    };

    // Select from suggestion
    const handleSelect = (loc) => {
        setQuery(loc);
        setLocation(loc);
        setShowSuggestions(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ location, date, guests });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#068488] p-[20px] text-[whitesmoke] shadow-md rounded-[10px] mx-[55px] my-[20px] flex justify-center gap-[15px] items-end flex-wrap"
        >
            {/* Location Autocomplete */}
            <div className="relative w-[50%] sm:w-[200px]">
                <label className="text-[14px] font-medium mb-[5px] block">Select Location</label>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onFocus={() => query && setShowSuggestions(true)}
                    placeholder="Search location..."
                    className="border border-[gray] p-[10px] rounded-[5px] w-full outline-none box-border text-black"
                />

                {showSuggestions && filteredLocations.length > 0 && (
                    <ul className="absolute z-10 bg-[#ddd] border border-[gray] w-[96%] p-[10px] rounded-[5px] list-none mt-[2px] max-h-[150px] overflow-y-auto shadow-lg text-[#363636]">
                        {filteredLocations.map((loc, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(loc)}
                                className="px-[8px] py-[6px] cursor-pointer hover:bg-[#919191]"
                            >
                                {loc}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Date */}
            <div className="flex flex-col w-[30%] sm:w-[200px]">
                <label className="text-[14px] font-medium mb-[5px]">Select Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-[gray] p-[10px] rounded-[5px] outline-none text-black"
                />
            </div>

            {/* Search Button */}
            <div className="w-[10%]">
                <button
                    type="submit"
                    className="bg-[#ff7a18] hover:bg-[#e56d15] w-full text-[white] px-[20px] py-[10px] rounded-[5px] border-[1px] border-[#ffb57a] cursor-pointer"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
