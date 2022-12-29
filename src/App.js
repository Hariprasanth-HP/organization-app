import "./App.css";

import { reset } from "./store/Display/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
