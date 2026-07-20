import React from "react";

function ListofPlayers() {

    const players = [

        { name: "Player 1", score: 90 },
        { name: "Player 2", score: 55 },
        { name: "Player 3", score: 88 },
        { name: "Player 4", score: 45 },
        { name: "Player 5", score: 77 },
        { name: "Player 6", score: 60 },
        { name: "Player 7", score: 82 },
        { name: "Player 8", score: 95 },
        { name: "Player 9", score: 50 },
        { name: "Player 10", score: 69 },
        { name: "Player 11", score: 100 }

    ];

    return (

        <div>

            <h2>List of Players</h2>

            <table border="1">

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Score</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        players.map((player, index) => (

                            <tr key={index}>

                                <td>{player.name}</td>

                                <td>{player.score}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

            <br />

            <h2>Players with Score Below 70</h2>

            <ul>

                {

                    players
                        .filter(player => player.score < 70)
                        .map((player, index) => (

                            <li key={index}>

                                {player.name} - {player.score}

                            </li>

                        ))

                }

            </ul>

        </div>

    );

}

export default ListofPlayers;