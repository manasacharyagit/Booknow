import React from "react";

const Ticket = ({ ticketDetails }) => {
    if (!ticketDetails) return null;

    return (
        <div className="relative bg-black text-white p-6 rounded-xl border-4 border-blue-500 shadow-lg max-w-sm mx-auto">
            {/* Decorative Outline Shape */}
            <div className="absolute inset-0 m-4 border-2 border-white rounded-xl pointer-events-none"></div>

            <div className="flex flex-col items-center">
                {/* Event Image */}
                <img
                    src={ticketDetails.image}
                    alt="Event"
                    className="mt-2 w-24 h-24 object-cover rounded-full mb-4 border-2 border-white"
                />

                {/* Event Name */}
                <h3 className="text-xl font-bold text-center">{ticketDetails.eventName}</h3>

                {/* Event Date and Time */}
                <p className="text-sm mt-1">{ticketDetails.eventDate}, {ticketDetails.eventTime}</p>

                {/* Randomly Generated Seat Number */}
                <p className="text-3xl font-bold mt-4">{`#${ticketDetails.seatNumber.toString().padStart(6, '0')}`}</p>
            </div>
        </div>
    );
};

export default Ticket;
