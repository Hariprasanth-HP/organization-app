import React from "react";
import Hierarchy from "./Hierarchy";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

const Chart = () => {
  const [employees, setEmployees] = useState([]);
  console.log("employees", employees);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("hierarchydata.json");
      const response = await data.json();
      console.log("response", response);
      setEmployees(response);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <Hierarchy />
    </div>
  );
};

export default Chart;
