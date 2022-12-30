export const addEmployee = (emp, isUpdate) => ({
  type: "ADD_EMPLOYEE",
  payload1: emp,
  payload2: isUpdate,
});
export const editEmployee = (index, isedit) => ({
  type: "EDIT_EMPLOYEE",
  payload1: index,
  payload2: isedit,
});
export const updateEmployee = (emp, index, isupdate) => ({
  type: "UPDATE_EMPLOYEE",
  payload1: emp,
  payload2: index,
  payload3: isupdate,
});
export const deleteEmployee = (index) => ({
  type: "DELETE_EMPLOYEE",
  payload: index,
});
