import "./App.css";
import "./component/list/Employeelist";
import "./component/Hierarchy/Hierarchy";
import Employeelist from "./component/list/Employeelist";
import Hierarchy from "./component/Hierarchy/Hierarchy";
import Provider from "./store/Provider/Provider";
import { useEffect, useState } from "react";
import data from "./data.json";
import Employeechart from "./component/Hierarchy/Hierarchy";
function App() {
  const [Aemployee, setAemployee] = useState(data);
  console.log("data", Aemployee);
  // useEffect(() => {
  //   const Importing = async () => {
  //     const data = await fetch("/data.json");
  //     const response = await data.json();
  //     setAemployee(response.employee);
  //   };
  //   Importing();
  // }, []);
  return (
    <Provider>
      <div className="App" style={{ display: "flex" }}>
        <Employeelist Aemployee={Aemployee} />
        {/* <Hierarchy Aemployee={Aemployee} />
         */}
        <Employeechart />
      </div>
    </Provider>
  );
}

export default App;
