import "./App.css";
<<<<<<< HEAD

import { reset } from "./store/Display/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import DisplaySheet from "./component/forzoTechlabs/DisplaySheet";

=======
import Employeelist from "./component/list/Employeelist";
import Chart from "./component/Draggable-chart/Chart";
>>>>>>> 60b6280 (my changes)
function App() {
  const user = useSelector((state) => state.AddUserReducer);
  const dispatch = useDispatch();
  return (
<<<<<<< HEAD
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DisplaySheet />
=======
    <div className="App" style={{ display: "flex" }}>
      <Employeelist />
      <Chart />
>>>>>>> 60b6280 (my changes)
    </div>
  );
}

export default App;
