import React, { useContext, useEffect, useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Mycontext } from "../../store/Provider/Provider";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

/////////////////////////////////
// import "../../../data.json"
const Employeelist = ({ Aemployee }) => {
  console.log("employee data", Aemployee);
  const { employee } = useContext(Mycontext);
  const [employees, setEmployees] = useState(Aemployee.employee);
  const [searchdata, setSearchdata] = useState("");
  const [searchteam, setSearchteam] = useState("");

  const [filteredsearch, setFilteredsearch] = useState(employees);
  // useEffect(() => {
  //   const Importing = async () => {
  //     const data = await fetch("data.json");
  //     const response = await data.json();
  //     setEmployees(response.employee);
  //   };
  //   Importing();
  // }, []);
  useEffect(() => {
    const filteredlist = employees.filter((employe) => {
      return employe.name.toLocaleLowerCase().includes(searchdata);
    });
    setFilteredsearch(filteredlist);
  }, [employees, searchdata]);
  useEffect(() => {
    const filteredTeam = employees.filter((employe) => {
      return employe.Team.toLocaleLowerCase().includes(searchteam);
    });
    setFilteredsearch(filteredTeam);
  }, [employees, searchteam]);
  const [open, setOpen] = React.useState(false);
  const searchitem = (e) => {
    const searchtolower = e.target.value.toLocaleLowerCase();
    setSearchdata(searchtolower);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const TeamChangeHandler = (e) => {
    setSearchteam(e.toLocaleLowerCase());
  };
  console.log("searchteam", searchteam);
  console.log("employees", employees);
  return (
    <div>
      <Box
        sx={{
          width: "400px",
          maxWidth: "600px",
          bgcolor: "aliceblue",
        }}
      >
        <nav aria-label="main mailbox folders">
          <AppBar position="static">
            <Toolbar>
              <Search style={{ display: "flex" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={searchitem}
                />
                <ListItemButton onClick={handleClick}>
                  {open ? (
                    <ExpandLess onClick={() => setFilteredsearch(employees)} />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>
              </Search>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <ListItemText
                      primary="Team A"
                      onClick={() => TeamChangeHandler("A")}
                    />
                    <ListItemText
                      primary="Team B"
                      onClick={() => TeamChangeHandler("B")}
                    />
                    <ListItemText
                      primary="Team C"
                      onClick={() => TeamChangeHandler("C")}
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            </Toolbar>
          </AppBar>
          <List>
            {filteredsearch.map((employee) => {
              return (
                <ListItem key={employee.name} disablePadding>
                  <ListItemButton>
                    <h6>
                      <ListItemText primary={employee.name} />
                    </h6>
                    <ListItemText primary={employee.Designation} />
                    <ListItemText primary={employee.Team} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </nav>
        <Divider />
      </Box>
    </div>
  );
};

export default Employeelist;
