import React from "react";
import useUser from "../../../Hooks/useUser";
import UserRow from "./UserRow";
import "./Users.css";

const Users = () => {
  const [users] = useUser();

  return (
    <div className="md:flex">
    <table class="table-fixed md:m-5 relative w-full">
        <thead>
          <tr>
            <th>Email</th>
            <th>Make Admin</th>
            <th>Remove User</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
          <UserRow key={user._id} user={user} />
        ))}
          
        </tbody>
      </table>
        
    </div>
  );
};

export default Users;
