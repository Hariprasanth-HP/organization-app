import "./App.css";
import Employeelist from "./component/list/Employeelist";
import Chart from "./component/Draggable-chart/Chart";
import Display from "./component/Display/Display";
import { reset } from "./store/Display/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector((state) => state.AddUserReducer);
  const dispatch = useDispatch();
  console.log("user", user);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>Organization Chart</h3>
      <div className="App" style={{ display: "flex" }}>
        <Employeelist />
        {user.displayuser ? <Display /> : <Chart />}
        <button
          style={{ height: "10%", background: "red", color: "white" }}
          onClick={() => dispatch(reset(false))}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;
