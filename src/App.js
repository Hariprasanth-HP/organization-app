import "./App.css";
import Employeelist from "./component/list/Employeelist";
import Chart from "./component/Draggable-chart/Chart";
import Display from "./component/Display/Display";
import { reset } from "./store/Display/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Form from "./component/Form";
import DataSheet from "./component/dataSheet";
import DisplaySheet from "./component/forzoTechlabs/DisplaySheet";

function App() {
  const user = useSelector((state) => state.AddUserReducer);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DisplaySheet />
    </div>
  );
}

export default App;
