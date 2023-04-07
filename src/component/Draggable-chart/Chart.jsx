import React from "react";
import Hierarchy from "./Hierarchy";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

const Chart = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("hierarchydata.json");
      const response = await data.json();
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
