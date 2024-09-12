import React from "react";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import ka from '../assets/ka.jpg';
import shreya from '../assets/shreya.jpg'
import qawwal from '../assets/qawwal.jpg'

const Home = () => {
    const events = [
        {
            id: 1,
            name: "Karan Aujla - It Was All A Dream",
            date: "2024-12-18",
            time: "8:00 PM",
            seatsLeft: 15,
            image: ka
        },
        {
            id: 1,
            name: "Shreya Ghoshal",
            date: "2024-09-10",
            time: "7:00 PM",
            seatsLeft: 15,
            image: shreya
        },
        {
            id: 1,
            name: "Qawwali night",
            date: "2024-09-10",
            time: "7:00 PM",
            seatsLeft: 15,
            image: qawwal
        }
        // Additional commented-out events...
    ];

    console.log("Home component loaded"); // Temporary debug log

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <div className="p-8">
                <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
