import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    console.log("email", email);
    const currentUser = {email : email};
    console.log('currentUser', currentUser);

    if(email){
        fetch()
    }
  }, [user]);
  return [token];
};

export default useToken;
