import React from "react";

import FlightDetails from "./FlightDetails";

function User() {

    return (

        <div>

            <h2>Welcome User</h2>

            <p>You can now book your flight.</p>

            <FlightDetails />

            <br />

            <button>

                Book Ticket

            </button>

        </div>

    );

}

export default User;