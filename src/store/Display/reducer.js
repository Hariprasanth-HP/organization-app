import { combineReducers } from "@reduxjs/toolkit";
import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "./constants";
let values = {
  employees: [],
  editEmp: "",
  isEdit: false,
  updateEmp: "",
};
function AddUserReducer(state = values, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      const employee = action.payload1;
      const isUpdateemp = action.payload2;
      return {
        ...state,
        employees: [...state.employees, employee],
        updateEmp: isUpdateemp,
      };
    case EDIT_EMPLOYEE:
      const editemployee = action.payload1;
      const isedit = action.payload2;
      return { ...state, editEmp: editemployee, isEdit: isedit };
    case UPDATE_EMPLOYEE:
      const updateemployee = action.payload1;
      const updateemployeeID = action.payload2;
      const isUpdate = action.payload3;
      const newArray = [...state.employees];
      newArray[updateemployeeID] = updateemployee;

      return {
        ...state,
        employees: newArray,
        isEdit: !state.isEdit,
        updateEmp: isUpdate,
      };
    case DELETE_EMPLOYEE:
      const deleteemployeeID = action.payload;

      const newdelete = state.employees.filter((val, index) => {
        return index !== deleteemployeeID;
      });
      return {
        ...state,
        employees: newdelete,
      };
    default:
      return state;
  }
}
const MyReducer = combineReducers({ AddUserReducer });
export default MyReducer;
