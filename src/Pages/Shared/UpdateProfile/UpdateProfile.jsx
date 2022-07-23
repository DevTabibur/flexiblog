import React from "react";
import "./UpdateProfile.css";

// demo https://codepen.io/mithicher/pen/wvabGoN

const UpdateProfile = () => {
  return (
    <>
      <div className="profile">
        <div class="card">
          <div class="avatar online">
            <div class="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div class="infos">
            <div class="name">
              <h2>Bradley Steve</h2>
              <h4>@bradsteve</h4>
            </div>
            <p class="text">
              I'm a Front End Developer, follow me to be the first who see my
              new work.
            </p>
            <div class="links flex">
              <button class="follow mr-2">Follow</button>
              <button class="view">View profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
