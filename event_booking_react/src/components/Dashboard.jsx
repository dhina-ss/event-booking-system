import React from 'react'
import Card from './Card'

function Dashboard() {
    const halls = [
        { name: "Royal Palace Hall", rating: 4.5, price: "25,000", image: "https://placehold.co/400x300?text=Hall+Image" },
        { name: "Golden Dreams Hall", rating: 5, price: "40,000", image: "https://placehold.co/400x300?text=Hall+Image" },
        { name: "Emerald Grand", rating: 3, price: "18,000", image: "https://placehold.co/400x300?text=Hall+Image" },
        { name: "Royal Palace Hall", rating: 4.5, price: "25,000", image: "https://placehold.co/400x300?text=Hall+Image" },
        { name: "Golden Dreams Hall", rating: 5, price: "40,000", image: "https://placehold.co/400x300?text=Hall+Image" },
        { name: "Emerald Grand", rating: 3, price: "18,000", image: "https://placehold.co/400x300?text=Hall+Image" }
    ];

    return (
        <div className="flex flex-wrap gap-[20px] items-center justify-center mt-[30px]">
            {halls.map((hall, index) => (
                <Card key={index} {...hall} />
            ))}
        </div>
    );
}

export default Dashboard
