import React, { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "./Employeelist.css";
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

const Employeelist = () => {
  const [employees, setEmployees] = useState([]);
  const [searchdata, setSearchdata] = useState("");
  const [searchteam, setSearchteam] = useState("");
  const [filteredsearch, setFilteredsearch] = useState(employees);
  useEffect(() => {
    const data = fetch("data.json")
      .then((data) => {
        return data.json();
      })
      .then((r) => {
        setEmployees(r.employee);
      });
  }, []);

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

  return (
    <div>
      <Box
        sx={{
          width: "400px",
          maxWidth: "600px",
          bgcolor: "aliceblue",
        }}
      >
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
                  disablePadding
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    // aria-label="add"
                    style={{ fontSize: "10px" }}
                    onClick={() => TeamChangeHandler("A")}
                  >
                    Team A
                  </Fab>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                    style={{ fontSize: "10px" }}
                    onClick={() => TeamChangeHandler("B")}
                  >
                    Team B
                  </Fab>
                  <Fab
                    style={{ fontSize: "10px" }}
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                    onClick={() => TeamChangeHandler("C")}
                  >
                    Team C
                  </Fab>
                </ListItemButton>
              </List>
            </Collapse>
          </Toolbar>
        </AppBar>
        <Grid
          item
          xs={12}
          style={{
            height: "100vh",
            overflow: "auto",
          }}
        >
          {filteredsearch.map((employee) => {
            return (
              <Paper
                elevation={8}
                style={{
                  width: "99%",
                  color: "green",
                }}
              >
                <ListItem className="employeelist" key={employee.name}>
                  <ListItemButton>
                    <img
                      style={{
                        width: "50px",
                        height: "50px ",
                        marginRight: "10px",
                        borderRadius: "50%",
                      }}
                      src={`${employee.image}`}
                    />
                    <Typography variant="h6" disablePadding>
                      {employee.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                      {employee.Designation}
                    </Typography>

                    <ListItemText primary={employee.Team} />
                  </ListItemButton>
                </ListItem>
              </Paper>
            );
          })}
        </Grid>

        <Divider />
      </Box>
    </div>
  );
};

export default Employeelist;
