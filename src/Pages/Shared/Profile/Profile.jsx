import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile'>
      <div class="card">
    <div class="img">
      <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='avatar' />
    </div>
    <div class="infos">
      <div class="name">
        <h2>Bradley Steve</h2>
        <h4>@bradsteve</h4>
      </div>
      <p class="text">
        I'm a Front End Developer, follow me to be the first 
        who see my new work.
      </p>
      <div class="links flex">
        <button class="follow mr-2">Follow</button>
        <button class="view">View profile</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Profile