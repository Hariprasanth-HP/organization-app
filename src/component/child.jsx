import { Checkbox } from "@mui/material";
import { useEffect, useRef, useState } from "react";
// import useDisabledClick from "./disabled";
import useOutsideAlerter from "./outsideAlert";
// const dataSource=[{name:"confirmedOutgoing", value:}]
export default function Child() {
  const wrapperRef = useRef(null);
  const [todo, setTodo] = useState([]);
  // const disabledRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) => setTodo(json.slice(0, 10)));
  }, []);
  // console.log("todo", todo);
  const handleFocus = () => {
    console.log("focus");
  };
  const handleBlur = () => {
    console.log("Blur");
  };
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div ref={wrapperRef}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
}
