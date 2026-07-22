import "./App.css";
import { useState } from "react";

import { EmployeesData } from "./Employee";
import EmployeesList from "./EmployeesList";

import ThemeContext from "./ThemeContext";

function App() {

  const employees = EmployeesData;

  const [theme, setTheme] = useState("light");

  return (

    <ThemeContext.Provider value={theme}>

      <div>

        <label>Select Theme : </label>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >

          <option value="light">
            Light
          </option>

          <option value="dark">
            Dark
          </option>

        </select>

      </div>

      <EmployeesList employees={employees} />

    </ThemeContext.Provider>

  );

}

export default App;