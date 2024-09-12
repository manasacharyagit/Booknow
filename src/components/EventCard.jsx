import React, { useState } from "react";
import emailjs from "emailjs-com";
import TicketModal from "./TicketModal";
import Ticket from "./Ticket";
import toast from 'react-hot-toast';

const EventCard = ({ event }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ticketDetails, setTicketDetails] = useState(null); // State for ticket details

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const seatNumber = Math.floor(Math.random() * event.seatsLeft) + 1; // Random seat number

        // Set up EmailJS parameters dynamically
        const templateParams = {
            user_name: name,
            user_email: email,
            event_name: event.name,
            event_date: event.date,
            event_time: event.time,
            seat_number: seatNumber,
        };

        // Send email using EmailJS
        emailjs
            .send(
                "service_c772d36",
                "template_bq36c5e", // Use your correct template ID here
                templateParams,
                "WEt1vuHy0_eYQY2Wt"
            )
            .then((response) => {
                toast.success("Your ticket has been booked! Please check your mail");
                console.log("SUCCESS!", response.status, response.text);


                // Set ticket details for both modal and card
                setTicketDetails({
                    eventName: event.name,
                    eventDate: event.date,
                    eventTime: event.time,
                    seatNumber: seatNumber,
                    name: name, // Ensure the user's name is included here
                    image: event.image,
                });

                // Open modal
                setIsModalOpen(true);
            })
            .catch((error) => {
                console.log("FAILED...", error);
                alert("Failed to send email. Please try again.");
            });

        // Clear input fields
        setEmail("");
        setName("");
    };


    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold">{event.name}</h2>
            <p className="text-gray-400">
                {event.date} at {event.time}
            </p>
            <p className="text-gray-400">Seats left: {event.seatsLeft}</p>
            <img
                src={event.image}
                alt={event.name}
                className="w-full h-40 object-cover mt-4 mb-4 rounded-lg"
            />

            {/* Display ticket details after booking */}
            {ticketDetails && (
                <div className="mt-4">
                    <Ticket ticketDetails={ticketDetails} />
                </div>
            )}

            {/* Booking Form */}
            <form onSubmit={sendEmail}>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    className="w-full p-2 mt-4 mb-2 bg-gray-700 text-white rounded"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="w-full p-2 mt-4 mb-2 bg-gray-700 text-white rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Claim Ticket
                </button>
            </form>

            {/* Ticket Modal */}
            <TicketModal
                isOpen={isModalOpen}
                onClose={closeModal}
                ticketDetails={ticketDetails}
            />
        </div>
    );
};

export default EventCard;
