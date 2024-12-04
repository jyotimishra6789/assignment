import React, { useState } from "react";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";

const RoleManagement = () => {
  // Dummy data for roles
  const initialRoles = [
    { id: 1, name: "Admin", permissions: "All", status: "Active" },
    { id: 2, name: "Editor", permissions: "Edit, View", status: "Active" },
    { id: 3, name: "Viewer", permissions: "View Only", status: "Inactive" },
    { id: 4, name: "Contributor", permissions: "Edit, View", status: "Active" },
  ];

  // State for roles, search, and filter
  const [roles, setRoles] = useState(initialRoles);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter
  const handleFilter = (e) => {
    setFilterStatus(e.target.value);
  };
  const getStatusColor = (status) => {
    return status === "Active" ? "green" : "red"; // Green for active, red for inactive
  };
  // Filter and search roles dynamically
  const filteredRoles = roles.filter((role) => {
    return (
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === "" || role.status === filterStatus)
    );
  });

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Role Management
      </Typography>

      <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
        <TextField
          label="Search Roles"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
        />
        <FormControl fullWidth  style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
          <InputLabel >Status</InputLabel>
          <Select  label="Search Roles"
          
          variant="outlined"  value={filterStatus} onChange={handleFilter}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Table to display roles */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Role Name</TableCell>
              <TableCell>Permissions</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRoles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.id}</TableCell>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.permissions}</TableCell>
                <TableCell style={{ color: getStatusColor(role.status) }}>{role.status}</TableCell>
              </TableRow>
            ))}
            {filteredRoles.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No roles found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RoleManagement;
