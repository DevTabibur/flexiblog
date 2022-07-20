import React from 'react';
import Loader from '../Loader/Loader';
import './Profile.css';
import { useQuery } from '@tanstack/react-query'


const Profile = () => {
  const {data: profiles, isLoading, refetch} = useQuery("profiles", ()=>{
    fetch(`http://localhost:5000/users`, {
      method : "GET",
      headers: {
        authorization : `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then( res => res.json())
  })

  if(isLoading){
    return <Loader/>
  }

  return (
    <div>
    <h2>All User</h2>
      {profiles.map( profile => console.log(profile))}
    </div>
  )
}

export default Profile