import "./App.css";
import Employeelist from "./component/list/Employeelist";
import Hierarchy from "./component/Draggable-chart/Hierarchy";
function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Employeelist />
      <Hierarchy />
    </div>
  );
}

export default App;
