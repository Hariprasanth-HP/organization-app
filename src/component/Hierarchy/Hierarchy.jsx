import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";

import Label from "@mui/icons-material/Label";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { logDOM } from "@testing-library/react";
import Hierarchydata from "./hierarchy-data.json";
import "./Hierarchy.css";
// const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
//   color: theme.palette.text.secondary,
//   [`& .${treeItemClasses.content}`]: {
//     color: theme.palette.text.secondary,
//     borderTopRightRadius: theme.spacing(2),
//     borderBottomRightRadius: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//     fontWeight: theme.typography.fontWeightMedium,
//     "&.Mui-expanded": {
//       fontWeight: theme.typography.fontWeightRegular,
//     },
//     "&:hover": {
//       backgroundColor: theme.palette.action.hover,
//     },
//     "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
//       backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
//       color: "var(--tree-view-color)",
//     },
//     [`& .${treeItemClasses.label}`]: {
//       fontWeight: "inherit",
//       color: "inherit",
//     },
//   },
//   [`& .${treeItemClasses.group}`]: {
//     marginLeft: 0,
//     [`& .${treeItemClasses.content}`]: {
//       paddingLeft: theme.spacing(2),
//     },
//   },
// }));

// function StyledTreeItem(props) {
//   const {
//     bgColor,
//     color,
//     labelIcon: LabelIcon,
//     labelInfo,
//     labelText,
//     ...other
//   } = props;

//   return (
//     <StyledTreeItemRoot
//       label={
//         <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
//           <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
//           <Typography
//             variant="body2"
//             sx={{ fontWeight: "inherit", flexGrow: 1 }}
//           >
//             {labelText}
//           </Typography>
//           <Typography variant="caption" color="inherit">
//             {labelInfo}
//           </Typography>
//         </Box>
//       }
//       style={{
//         "--tree-view-color": color,
//         "--tree-view-bg-color": bgColor,
//       }}
//       {...other}
//     />
//   );
// }

// StyledTreeItem.propTypes = {
//   bgColor: PropTypes.string,
//   color: PropTypes.string,
//   labelIcon: PropTypes.elementType.isRequired,
//   labelInfo: PropTypes.string,
//   labelText: PropTypes.string.isRequired,
// };

function Hierechy({ treeemployee }) {
  console.log("Hierechy", treeemployee);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {treeemployee.map((tree) => {
        console.log("tree.name", tree.name);
        return (
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              // background: "yellow",
            }}
          >
            <h2>{tree.name}</h2>
            <h2>{tree.Designation}</h2>
            <h2>{tree.ID}</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // margin: "10px",
                // background: "red",
              }}
            >
              {tree.child?.length && <Hierechy treeemployee={tree.child} />}
            </div>
          </li>
        );
      })}
    </div>

    // <TreeView
    //   aria-label={""}
    //   defaultExpanded={["3"]}
    //   defaultCollapseIcon={<ArrowDropDownIcon />}
    //   defaultExpandIcon={<ArrowRightIcon />}
    //   defaultEndIcon={<div style={{ width: 24 }} />}
    //   sx={{
    //     width: "800px",
    //     height: "264px",
    //     overflowY: "auto",
    //   }}
    // >
    //   <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
    //     <StyledTreeItem
    //       nodeId={"5"}
    //       labelText="Social"
    //       labelIcon={""}
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //     />
    //   </StyledTreeItem>
    // </TreeView>
  );
}
const Employeechart = () => {
  return (
    <div className="emp-tree">
      <h1>Employee Chart</h1>
      <Hierechy treeemployee={Hierarchydata} />
    </div>
  );
};
export default Employeechart;
