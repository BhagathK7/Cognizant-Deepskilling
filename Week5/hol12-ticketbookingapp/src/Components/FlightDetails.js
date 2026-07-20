import React from "react";

function FlightDetails() {

    const flights = [

        {
            id: 1,
            airline: "IndiGo",
            from: "Chennai",
            to: "Delhi",
            price: 5500
        },

        {
            id: 2,
            airline: "Air India",
            from: "Bangalore",
            to: "Mumbai",
            price: 6200
        },

        {
            id: 3,
            airline: "SpiceJet",
            from: "Hyderabad",
            to: "Kolkata",
            price: 4800
        }

    ];

    return (

        <div>

            <h2>Available Flights</h2>

            <table border="1">

                <thead>

                    <tr>

                        <th>Airline</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        flights.map((flight) => (

                            <tr key={flight.id}>

                                <td>{flight.airline}</td>
                                <td>{flight.from}</td>
                                <td>{flight.to}</td>
                                <td>₹{flight.price}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default FlightDetails;