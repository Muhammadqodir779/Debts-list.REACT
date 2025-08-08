import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function UserList({ users, deleteUser, startEditUser }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Ism</TableCell>
          <TableCell>Familiya</TableCell>
          <TableCell>Telefon</TableCell>
          <TableCell>Qarz</TableCell>
          <TableCell>Amallar</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.debt}</TableCell>
            <TableCell>
              <IconButton color="primary" onClick={() => startEditUser(user)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => deleteUser(user.id)}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
