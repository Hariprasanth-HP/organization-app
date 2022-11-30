import "./App.css";
import Employeelist from "./component/list/Employeelist";
import Chart from "./component/Draggable-chart/Chart";
function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Employeelist />
      <Chart />
    </div>
  );
}

export default App;
