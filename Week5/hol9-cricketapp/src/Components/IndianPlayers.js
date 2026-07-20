import React from "react";

function IndianPlayers() {

    const players = [

        "Player1",
        "Player2",
        "Player3",
        "Player4",
        "Player5",
        "Player6"

    ];

    const oddPlayers = players.filter((value, index) => index % 2 === 0);

    const evenPlayers = players.filter((value, index) => index % 2 !== 0);

    const T20Players = [

        "Virat",
        "Rohit",
        "Surya"

    ];

    const RanjiPlayers = [

        "Pujara",
        "Rahane",
        "Iyer"

    ];

    const mergedPlayers = [...T20Players, ...RanjiPlayers];

    return (

        <div>

            <h2>Odd Team Players</h2>

            <ul>

                {

                    oddPlayers.map((player, index) => (

                        <li key={index}>{player}</li>

                    ))

                }

            </ul>

            <h2>Even Team Players</h2>

            <ul>

                {

                    evenPlayers.map((player, index) => (

                        <li key={index}>{player}</li>

                    ))

                }

            </ul>

            <h2>Merged Players</h2>

            <ul>

                {

                    mergedPlayers.map((player, index) => (

                        <li key={index}>{player}</li>

                    ))

                }

            </ul>

        </div>

    );

}

export default IndianPlayers;