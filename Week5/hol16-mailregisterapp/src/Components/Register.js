import React, { useState } from "react";

function Register() {

    const [form, setForm] = useState({

        name: "",
        email: "",
        password: ""

    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {

        const { name, value } = event.target;

        setForm({

            ...form,

            [name]: value

        });

    };

    const validate = () => {

        let tempErrors = {};

        if (form.name.length < 5) {

            tempErrors.name =
                "Name should contain at least 5 characters";

        }

        if (
            !form.email.includes("@") ||
            !form.email.includes(".")
        ) {

            tempErrors.email =
                "Enter a valid Email";

        }

        if (form.password.length < 8) {

            tempErrors.password =
                "Password should contain at least 8 characters";

        }

        return tempErrors;

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        const validationErrors = validate();

        setErrors(validationErrors);

        if (
            Object.keys(validationErrors).length === 0
        ) {

            alert("Registration Successful!");

            setForm({

                name: "",
                email: "",
                password: ""

            });

        }

    };

    return (

        <div className="register-container">

            <h2>Mail Registration Form</h2>

            <form onSubmit={handleSubmit}>

                <label>Name</label>

                <input

                    type="text"

                    name="name"

                    value={form.name}

                    onChange={handleChange}

                />

                <p className="error">

                    {errors.name}

                </p>

                <label>Email</label>

                <input

                    type="email"

                    name="email"

                    value={form.email}

                    onChange={handleChange}

                />

                <p className="error">

                    {errors.email}

                </p>

                <label>Password</label>

                <input

                    type="password"

                    name="password"

                    value={form.password}

                    onChange={handleChange}

                />

                <p className="error">

                    {errors.password}

                </p>

                <button type="submit">

                    Register

                </button>

            </form>

        </div>

    );

}

export default Register;