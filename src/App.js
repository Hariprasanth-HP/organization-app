import "./App.css";
import Employeelist from "./component/list/Employeelist";
import Chart from "./component/Draggable-chart/Chart";
import Display from "./component/Display/Display";
function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Employeelist />
      <Display />
      {/* <Chart /> */}
    </div>
  );
}

export default App;
