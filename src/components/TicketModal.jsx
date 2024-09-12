import React, { useEffect, useState } from "react";

const TicketModal = ({ isOpen, onClose, ticketDetails }) => {
    const [ticketNumber, setTicketNumber] = useState("");

    // Generate random ticket number when modal opens
    useEffect(() => {
        if (isOpen) {
            setTicketNumber(`#${Math.floor(100000 + Math.random() * 900000)}`);
        }
    }, [isOpen]);

    if (!isOpen || !ticketDetails) return null; // Ensure ticketDetails is available

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative bg-black text-white p-8 rounded-3xl border-4 border-blue-500 shadow-lg w-full max-w-lg">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-3xl text-blue-500 hover:text-white"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Event Ticket Details */}
                <div className="flex flex-col items-center space-y-6">
                    <h2 className="text-3xl font-bold text-blue-500">You're In!</h2>
                    <p className="text-lg">Booknow has booked your tickets. Enjoy the event</p>

                    {/* Ticket Design */}
                    <div className="bg-black border border-blue-500 rounded-lg p-6 w-full flex justify-between items-center">
                        <div className="flex flex-col">
                            {/* Display user's name */}
                            <h3 className="text-2xl font-bold mb-2">
                                {ticketDetails.eventName}
                            </h3>

                            {/* Display event date and time */}
                            <p className="text-sm text-gray-400">
                                {ticketDetails.eventDate}, {ticketDetails.eventTime}
                            </p>

                            {/* Display user's name */}
                            <p className="text-lg text-white mt-4">
                                Name: {ticketDetails.name || 'Your Name'}
                            </p>
                        </div>

                        {/* Randomly generated ticket number */}
                        <div className="text-3xl font-bold text-blue-500">
                            {ticketNumber}
                        </div>
                    </div>

                    {/* Icons for sharing */}
                    <div className="flex space-x-4 mt-4">
                        <button className="bg-blue-500 text-black p-2 rounded-full hover:bg-white transition">
                            🐦
                        </button>
                        <button className="bg-blue-500 text-black p-2 rounded-full hover:bg-white transition">
                            🌐
                        </button>
                        <button className="bg-blue-500 text-black p-2 rounded-full hover:bg-white transition">
                            📷
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketModal;
