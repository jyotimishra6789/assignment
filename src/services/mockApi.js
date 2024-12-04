export const mockUsers = [
    { id: 1, name: "Alice", email: "alice@example.com", roles: ["Admin"], status: "Active" },
    { id: 2, name: "Bob", email: "bob@example.com", roles: ["Editor"], status: "Inactive" },
  ];
  
  export const mockRoles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ];
  
  export const mockPermissions = ["Read", "Write", "Delete"];
  