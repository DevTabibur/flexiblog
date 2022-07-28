import React, { useEffect } from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import auth from '../../../Firebase/firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import useToken from '../../../Hooks/useToken';
import Loader from '../Loader/Loader';

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    createUser,
    createLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });

  };

  const [token] = useToken(createUser || googleUser);
  // get all type of user
  if (token) {
    navigate("/home");
  }
  // useEffect(()=>{
  //   if (token) {
  //     navigate("/home");
  //   }
  // }, [createUser || googleUser])
  

  // for loader
  if (createLoading || googleLoading || updating) {
    return <Loader></Loader>;
  }

  // for error showing messages
  let signInError;
  if (createError || googleError || updateError) {
    signInError = (
      <small>
        <p className="text-red-500">
          {createError?.message || googleError?.message || updateError?.message}
        </p>
      </small>
    );
  }

  return (
    <div className="body py-12 pt-20">
      <div className="container mx-auto px-4">
        <div className="md:grid grid-cols-1 w-96 mx-auto gap-8 gy-4">
          <div className=" border rounded-lg p-10">
            <div className="login-form">
              <h1 className="text-2xl form-title font-semibold">Register Form</h1>
              <h4 className="form-sub-title">
              Are you new here? Please Register!
              </h4>

              <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="name" className=" my-0 py-0">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  // className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    }
                  })}
                />
                <label className="label my-0 py-0">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-teal-500">
                      {errors.name.message}
                    </span>
                  )}
                  
                </label>


                <label htmlFor="email" className=" my-0 py-0">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  // className="input input-bordered w-full max-w-xs"
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
                <label className="label my-0 py-0">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-teal-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-teal-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>

                <label htmlFor="password" className=" my-0 py-0">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label my-0 py-0">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-teal-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-teal-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>

                {signInError}
                <input type="submit" value="REGISTER" />

                <label className="label my-0 py-0">
                  <span className="label-text-alt">
                    <div className="form-control my-0 py-0">
                      <label className="cursor-pointer label my-0 py-0">
                        <span
                          // onClick={async () => {
                          //   await sendPasswordResetEmail(email)
                          // }}
                          className="label-text-alt"
                        >
                          <p className="text-teal-500 text-sm">
                            Forgot Password?
                          </p>
                        </span>
                      </label>
                    </div>
                  </span>
                </label>

                <h4 className="form-sub-title my-5 text-red-500">
                  <Link to="/login">
                    Already have an account? Please Login!
                  </Link>
                </h4>

                <div className="bottom-social-login flex justify-center items-center mt-10">
                  <div className="label-text">
                    <h1 className="text-2xl font-semibold">
                      Login With:
                      <span>
                        <FontAwesomeIcon
                          className="hover:text-teal-600 text-xl ml-5 mr-5"
                          icon={faFacebookF}
                        />
                        <FontAwesomeIcon
                          className="hover:text-teal-600 text-xl mr-5"
                          icon={faGoogle}
                          onClick={() => signInWithGoogle()}
                        />
                        <FontAwesomeIcon
                          className="hover:text-teal-600 text-xl "
                          icon={faTwitter}
                        />
                      </span>
                    </h1>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register