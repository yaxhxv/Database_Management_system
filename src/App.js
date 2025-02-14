import Navbar from "./components/Navbar";
import EmployeeList from "./components/EmployeeList";
import EmployeeCard from "./components/EmployeeCArd";
import "./styles.css";
import { useEffect, useState } from "react";
import users from "./users.json";

export default function App() {
  const [data, setData] = useState([]);
  const [activeProfile, setActiveProfile] = useState("");

  // console.log(data);

  useEffect(() => {
    setData(users.employees);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <EmployeeList employees={data} setActiveProfile={setActiveProfile} />
        <EmployeeCard employees={data} activeProfile={activeProfile} />
      </div>
    </div>
  );
}
