import React, { useState } from "react";
import "./PostBlog.css";

// demo https://www.jotform.com/build/222014815563450
// demo https://codepen.io/palashbasak/pen/oxQbed
// demo https://codepen.io/leo-bian/pen/ZvmyVb
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";

const PostBlog = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [info, setInfo] = useState([]);
  const onSubmit = (data) => {
    setInfo(data);
    const url = `http://localhost:5000/blogs`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledgement === "success") {
          console.log("data inside fetch", data);
          // reset form
          document.getElementById("form-parent").reset();
        }
      });
  };

  return (
    <div className="container mx-auto px-4">
      <form className="form-parent shadow-lg" onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          className="input-field"
          type="email"
          placeholder="Your Email"
          value={user?.email}
          readOnly
          {...register("email", {
            required: {
              value: true,
              message: "Email is Required",
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Provide a valid Email",
            },
          })}
        />

        <label>Published At</label>
        <input
          className="input-field"
          readOnly
          value={new Date().toLocaleString()}
          {...register("published")}
        />

        {/* <label>Your Name*</label>
        <input
          className="input-field"
          {...register("name", {
            required: true
          })}
        />
        {errors?.name?.type === "required" && (
          <p className="warning-text">Name is required</p>
        )}

        <label>Upload Author Image*</label>
        <input
          className="input-field"
          type="file"
          {...register("authorImg", {
            required: true,
          })}
        />
        {errors?.authorImg?.type === "required" && (
          <p className="warning-text">Author Image is required</p>
        )}

        <label>Author Bio</label>
        <input className="input-field" {...register("authorBio", {})} />

        <label>Upload Blog Image*</label>
        <input
          className="input-field"
          type="file"
          {...register("blogImg", {
            required: true,
          })}
        />
        {errors?.blogImg?.type === "required" && (
          <p className="warning-text">Image is required</p>
        )} */}

        <label>Blog Title*</label>
        <input
          className="input-field"
          {...register("blogTitle", {
            required: true,
          })}
        />
        {errors?.blogTitle?.type === "required" && (
          <p className="warning-text">Blog Title is required</p>
        )}

        <label>Select Category*</label>
        <select {...register("category")}>
          <option value="technology">Technology</option>
          <option value="travel">Travel</option>
          <option value="other">Other</option>
        </select>

        <label>Write Description*</label>
        <textarea
          className="input-field"
          {...register("description", {
            required: true,
            maxLength: 300,
          })}
        />
        {errors?.description?.type === "required" && (
          <p className="warning-text">Description is required</p>
        )}
        {errors?.description?.type === "maxLength" && (
          <p className="warning-text">Description Should be 300 words</p>
        )}

        <label>Blog Content*</label>
        <textarea
          className="input-field"
          {...register("content", {
            required: true,
          })}
        />
        {errors?.content?.type === "required" && (
          <p className="warning-text">Content is required</p>
        )}

        <input type="submit" value="POST BLOG" />
      </form>
    </div>
  );
};

export default PostBlog;
