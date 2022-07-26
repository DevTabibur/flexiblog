import React from "react";
import './UserRow.css';

const UserRow = ({ user }) => {
  const {email, name} = user;
  
  return (
    <>
      <tr>
            <td>{email}</td>
            <td><button className="btn btn-xs sm:btn-xs md:btn-md lg:btn-lg">Make Admin</button></td>
            <td><button className="btn btn-xs sm:btn-xs md:btn-md lg:btn-lg">Remove user</button></td>
            <td>User</td>
            </tr>
    </>
  );
};

export default UserRow;
