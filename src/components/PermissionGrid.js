import React from "react";

const PermissionGrid = ({ permissions }) => (
  <div>
    <h3>Permissions</h3>
    <ul>
      {permissions.map((perm, idx) => (
        <li key={idx}>{perm}</li>
      ))}
    </ul>
  </div>
);

export default PermissionGrid;
