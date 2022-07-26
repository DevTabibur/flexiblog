import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "./UserRow.css";

const UserRow = ({ user, refetch }) => {
  const { email, name } = user;

  // make an user an admin function
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/:email`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("You are not authorized to make this user an admin", {error: "invalid"});
        }
        return res.json();
      })
      .then((data) => {
        console.log("data inside the make admin function", data);
        if (data.modifiedCount > 0) {
          toast.success("User made an admin");
          refetch();
        }
      });

  };

  // remove an user function
  const removeUser = () => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "DELETE",
      headers:{
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }
    })
    .then(res => res.json())
  };

  return (
    <>
      <tr>
        <td>{email}</td>
        <td>
          <button
            onClick={makeAdmin}
            className="btn btn-xs sm:btn-xs md:btn-md lg:btn-lg"
          >
            Make Admin
          </button>
        </td>
        <td>
          <button
            onClick={removeUser}
            className="btn btn-xs sm:btn-xs md:btn-md lg:btn-lg"
          >
            Remove user
          </button>
        </td>
        <td>User</td>
      </tr>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default UserRow;
