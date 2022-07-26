import React, { useEffect, useState } from 'react'

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/blogs`, {
            method: 'GET',
            headers:{
                'content-type': 'application/json',
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            setBlogs(data)
        })
    }, [])
  return [blogs, setBlogs]
}

export default useBlogs