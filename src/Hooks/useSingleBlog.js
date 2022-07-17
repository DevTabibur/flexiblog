import React, { useEffect, useState } from 'react'

const useSingleBlog = (id) => {
    const [singleBlog, setSingleBlog ] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/blog/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setSingleBlog(data)
        })
    }, [])
  return [singleBlog, setSingleBlog ]
}

export default useSingleBlog