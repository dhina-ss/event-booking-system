import React from 'react'
import Card from './Card'

function Dashboard() {
    const dashboardList = {
        top_deals: [
            { name: "Royal Palace Hall", rating: 4.5, price: "25,000", image: "https://placehold.co/400x300?text=Hall+Image" },
            { name: "Golden Dreams Hall", rating: 5, price: "40,000", image: "https://placehold.co/400x300?text=Hall+Image" },
            { name: "Emerald Grand", rating: 3, price: "18,000", image: "https://placehold.co/400x300?text=Hall+Image" }
        ],
        popular_halls: [
            { name: "Crystal Ballroom", rating: 4.8, price: "30,000", image: "https://placehold.co/400x300?text=Hall+Image" },
            { name: "Lavish Lounge", rating: 4.2, price: "22,000", image: "https://placehold.co/400x300?text=Hall+Image" },
            { name: "Majestic Hall", rating: 4.9, price: "35,000", image: "https://placehold.co/400x300?text=Hall+Image" }
        ],
        recommended_for_you: [
            { name: "Elegant Events Hall", rating: 4.6, price: "28,000", image: "https://placehold.co/400x300?text=Hall+Image" },
            { name: "Starlight Venue", rating: 4.3, price: "20,000", image: "https://placehold.co/400x300?text=Hall+Image" },
            { name: "Opulent Oasis", rating: 4.7, price: "32,000", image: "https://placehold.co/400x300?text=Hall+Image" }
        ],
        newly_added_venues: [
            { name: "Sunset Terrace", rating: 4.1, price: "19,000", image: "https://placehold.co/400x300?text=Hall+Image" },
            { name: "Moonlit Garden", rating: 4.4, price: "24,000", image: "https://placehold.co/400x300?text=Hall+Image" },
            { name: "Twilight Pavilion", rating: 4.0, price: "21,000", image: "https://placehold.co/400x300?text=Hall+Image" }
        ]
    };

    return (
        <div className="px-[55px]">
            {Object.entries(dashboardList).map(([sectionName, items]) => (
                <div key={sectionName}>
                    <h2 className="text-2xl font-semibold mb-4 capitalize">
                        {sectionName.replace(/_/g, " ")}
                    </h2>
                    <div className="flex flex-wrap gap-[20px] justify-center">
                        {items.map((hall, index) => (
                            <Card key={index} {...hall} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Dashboard
