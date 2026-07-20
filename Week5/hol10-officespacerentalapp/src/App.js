import "./App.css";

import officeImage from "./office.jpg";

function App() {

    const office = {
        name: "DBS Business Center",
        rent: 55000,
        address: "Chennai"
    };

    const officeSpaces = [

        {
            id: 1,
            name: "DBS Business Center",
            rent: 55000,
            address: "Chennai"
        },

        {
            id: 2,
            name: "WeWork",
            rent: 75000,
            address: "Bangalore"
        },

        {
            id: 3,
            name: "Smart Office",
            rent: 60000,
            address: "Hyderabad"
        }

    ];

    return (

        <div className="container">

            <h1>Office Space Rental App</h1>

            <img
                src={officeImage}
                alt="Office Space"
                width="500"
                height="300"
            />

            <h2>Featured Office</h2>

            <p>
                <b>Name :</b> {office.name}
            </p>

            <p
                style={{
                    color: office.rent < 60000 ? "red" : "green"
                }}
            >
                <b>Rent :</b> ₹{office.rent}
            </p>

            <p>
                <b>Address :</b> {office.address}
            </p>

            <hr />

            <h2>Available Office Spaces</h2>

            {

                officeSpaces.map((item) => (

                    <div className="card" key={item.id}>

                        <h3>{item.name}</h3>

                        <p
                            style={{
                                color:
                                    item.rent < 60000
                                        ? "red"
                                        : "green"
                            }}
                        >
                            Rent : ₹{item.rent}
                        </p>

                        <p>
                            Address : {item.address}
                        </p>

                    </div>

                ))

            }

        </div>

    );

}

export default App;