import React from "react";

function BookDetails() {

    const books = [

        {
            id: 1,
            name: "Master React",
            author: "Jordan Walke",
            price: 650
        },

        {
            id: 2,
            name: "Learning Java",
            author: "James Gosling",
            price: 550
        },

        {
            id: 3,
            name: "Spring Boot Guide",
            author: "Rod Johnson",
            price: 700
        }

    ];

    return (

        <div>

            <h2>Book Details</h2>

            <table border="1">

                <thead>

                    <tr>

                        <th>Book</th>
                        <th>Author</th>
                        <th>Price</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        books.map((book) => (

                            <tr key={book.id}>

                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>₹{book.price}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default BookDetails;