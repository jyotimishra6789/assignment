import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [newUser, setNewUser] = useState({ username: '', role: '', status: 'Active' });

    useEffect(() => {
        setUsers([
            { id: 1, username: 'JohnDoe', role: 'Admin', status: 'Active' },
            { id: 2, username: 'JaneSmith', role: 'User', status: 'Inactive' },
        ]);
    }, []);

    const handleAddUser = () => {
        setUsers([...users, { ...newUser, id: users.length + 1 }]);
        setOpen(false);
    };

    const getStatusColor = (status) => {
        return status === "Active" ? "green" : "red"; 
    };

    const columns = [
      { 
          field: 'id', 
          headerName: 'ID', 
          width: 150,
          headerClassName: 'header-cell',
      },
      { 
          field: 'username', 
          headerName: 'Username', 
          width: 150,
          headerClassName: 'header-cell',
      },
      { 
          field: 'role', 
          headerName: 'Role', 
          width: 150,
          headerClassName: 'header-cell',
      },
      {
          field: 'status',
          headerName: 'Status',
          width: 150,
          headerClassName: 'header-cell',
          renderCell: (params) => (
              <div style={{ color: getStatusColor(params.value) }}>
                  {params.value}
              </div>
          ),
      },
  ];

    return (
        <Box m={2} sx={{ width: '48%' }}>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                Add User
            </Button>
            <Box mt={2}>
                <DataGrid rows={users} columns={columns} autoHeight 
                    sx={{
                        '& .MuiDataGrid-columnHeader': {
                            '&:hover': {
                                backgroundColor: '#f0f0f0',  
                            },
                        },
                        '& .MuiDataGrid-row': {
                            '&:hover': {
                                backgroundColor: '#f5f5f5',  
                            },
                        },
                    }} 
                />
            </Box>

            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="xs">
                <DialogTitle>Add New User</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Username"
                        fullWidth
                        margin="dense"
                        value={newUser.username}
                        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                    />
                    <TextField
                        label="Role"
                        fullWidth
                        margin="dense"
                        value={newUser.role}
                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleAddUser} variant="contained" color="primary">Add</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default UserManagement;
