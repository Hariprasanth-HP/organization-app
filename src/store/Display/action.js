export const addEmployee = (emp) => ({ type: "ADD_EMPLOYEE", payload: emp });
export const editEmployee = (index, isedit) => ({
  type: "EDIT_EMPLOYEE",
  payload1: index,
  payload2: isedit,
});
export const updateEmployee = (emp, index) => ({
  type: "UPDATE_EMPLOYEE",
  payload1: emp,
  payload2: index,
});
export const deleteEmployee = (index) => ({
  type: "DELETE_EMPLOYEE",
  payload: index,
});
