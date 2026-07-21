import React, { Component } from "react";

class Getuser extends Component {

    constructor() {

        super();

        this.state = {

            person: null

        };

    }

    async componentDidMount() {

        const response = await fetch("https://api.randomuser.me/");

        const data = await response.json();

        this.setState({

            person: data.results[0]

        });

    }

    render() {

        const { person } = this.state;

        if (!person) {

            return <h2>Loading...</h2>;

        }

        return (

            <div>

                <img
                    src={person.picture.large}
                    alt="User"
                />

                <h2>

                    {person.name.title}{" "}
                    {person.name.first}

                </h2>

            </div>

        );

    }

}

export default Getuser;