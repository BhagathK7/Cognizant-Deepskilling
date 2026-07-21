import { useEffect, useState } from "react";
import "./App.css";
import GitClient from "./GitClient";

function App() {

    const [repos, setRepos] = useState([]);

    useEffect(() => {

        GitClient.getRepositories("techiesyed")
            .then(data => setRepos(data));

    }, []);

    return (

        <div className="App">

            <h2>GitHub Repositories</h2>

            <ul>

                {repos.map((repo, index) => (

                    <li key={index}>{repo}</li>

                ))}

            </ul>

        </div>

    );

}

export default App;