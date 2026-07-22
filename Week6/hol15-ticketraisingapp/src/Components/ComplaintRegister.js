import React, { useState } from "react";

function ComplaintRegister() {

    const [employeeName, setEmployeeName] = useState("");
    const [complaint, setComplaint] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        const referenceNumber = Math.floor(
            100000 + Math.random() * 900000
        );

        alert(
            `Complaint Registered Successfully!\n\nEmployee Name : ${employeeName}\nReference Number : ${referenceNumber}`
        );

        setEmployeeName("");
        setComplaint("");
    };

    return (

        <div className="form-container">

            <h2>Ticket Raising App</h2>

            <form onSubmit={handleSubmit}>

                <label>

                    Employee Name

                </label>

                <input
                    type="text"
                    value={employeeName}
                    onChange={(e) =>
                        setEmployeeName(e.target.value)
                    }
                    required
                />

                <label>

                    Complaint

                </label>

                <textarea
                    rows="5"
                    value={complaint}
                    onChange={(e) =>
                        setComplaint(e.target.value)
                    }
                    required
                />

                <button type="submit">

                    Submit Complaint

                </button>

            </form>

        </div>

    );

}

export default ComplaintRegister;