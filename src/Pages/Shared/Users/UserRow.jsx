import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import "./UserRow.css";

const UserRow = ({ user, customLoading }) => {
  const { email, name , role} = user;
  const [userAuth] = useAuthState(auth);
  const [admin] = useAdmin(userAuth);

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
          toast.error("You are not authorized to make this user an admin", {
            error: "invalid",
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log("data inside the make admin function", data);

          toast.success("User made an admin");
          customLoading(true);
        }
      });
  };

  // remove an user function
  const removeUser = () => {
    // fetch(`http://localhost:5000/user/${email}`, {
    //   method: "DELETE",
    //   headers:{
    //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   }
    // })
    // .then(res => res.json())
    alert("removing is on the way");
  };

  return (
    <>
      <tr>
        <td>{email}</td>
        {role !== admin && (
          <td>
            <button
              onClick={makeAdmin}
              className="btn btn-xs sm:btn-xs md:btn-md lg:btn-lg"
            >
              Make an Admin
            </button>
          </td>
        )}
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
