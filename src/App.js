import "./App.css";
import Employeelist from "./component/list/Employeelist";
import Chart from "./component/Draggable-chart/Chart";
import Display from "./component/Display/Display";
import { logged, reset } from "./store/Display/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LoginPage from "./component/Login/Login";

function App() {
  const user = useSelector((state) => state.AddUserReducer);
  const dispatch = useDispatch();
  const { isLogged } = user;
  console.log("user.isLogged", isLogged === false);

  return (
    <>
      {!isLogged ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <LoginPage />
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>Project Management</h3>
        </div>
      )}
    </>
  );
}

export default App;
