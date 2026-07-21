import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div className="App">

            <h1>Bloggers App</h1>

            {showBooks && <BookDetails />}

            <hr />

            {showBlogs ? <BlogDetails /> : null}

            <hr />

            {

                showCourses

                    ? <CourseDetails />

                    : <h3>No Courses Available</h3>

            }

        </div>

    );

}

export default App;