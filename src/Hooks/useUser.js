import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.init";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          // before load all users, check if the user is valid and they have correct jwt token, otherwise it'll take the user login page to validate their login process
          // checking valid user and jwt token
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }

        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, [users]);

  return [users];
};

export default useUser;
