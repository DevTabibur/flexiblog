import React from "react";
import { useQuery } from "react-query";
import useUser from "../../../Hooks/useUser";
import UserRow from "./UserRow";
import "./Users.css";
import Loader from "../Loader/Loader";

const Users = () => {
  const [users] = useUser();
  // const {
  //   data:users,
  //   isLoading,
  //   refetch,
  // } = useQuery("users", () => 
  //   fetch(`http://localhost:5000/users`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  // ).then(res => res.json());

  // // if(isLoading){
  // //   return <Loader></Loader>
  // // }

  return (
    <div className="md:flex">
      <table class="table-fixed  relative w-full">
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
            <UserRow key={user._id} user={user}  />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
