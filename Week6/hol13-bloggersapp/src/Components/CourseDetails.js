import React from "react";

function CourseDetails() {

    const courses = [

        {
            id: 1,
            course: "React",
            duration: "30 Hours"
        },

        {
            id: 2,
            course: "Java",
            duration: "45 Hours"
        },

        {
            id: 3,
            course: "Spring Boot",
            duration: "35 Hours"
        }

    ];

    return (

        <div>

            <h2>Course Details</h2>

            <table border="1">

                <thead>

                    <tr>

                        <th>Course</th>
                        <th>Duration</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        courses.map((course) => (

                            <tr key={course.id}>

                                <td>{course.course}</td>
                                <td>{course.duration}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default CourseDetails;