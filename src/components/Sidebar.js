import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "240px",
        backgroundColor: "#0077B6",
        height: "100vh",
      }}
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor : "transparent",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#909EEF"; // Darken the background on hover
            e.target.style.color = "white"; // Ensure text is white
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent"; // Reset the background color
            e.target.style.color = "white"; // Ensure text remains white
          }}
        >
          <ListItemIcon style={{ color: "white" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" style={{ color: "white" }} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/users"
          style={{
            color: "white",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#909EEF"; // Darken the background on hover
            e.target.style.color = "white"; // Ensure text is white
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent"; // Reset the background color
            e.target.style.color = "white"; // Ensure text remains white
          }}
        >
          <ListItemIcon style={{ color: "white" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="User Management" style={{ color: "white" }} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/roles"
          style={{
            color: "white",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#909EEF"; // Darken the background on hover
            e.target.style.color = "white"; // Ensure text is white
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent"; // Reset the background color
            e.target.style.color = "white"; // Ensure text remains white
          }}
        >
          <ListItemIcon style={{ color: "white" }}>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText primary="Role Management" style={{ color: "white" }} />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
