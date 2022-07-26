import React, { useEffect, useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import useToken from "../../../Hooks/useToken";
import Loader from "../Loader/Loader";

const Login = () => {
  // for returning user the exact page he wants to enter after login
  const navigate = useNavigate();
  const location = useLocation();

  // to get registered user's email and password
  const [user] = useAuthState(auth);

const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
const [
  signInWithEmailAndPassword,
  signInUser,
  signInLoading,
  signInError,
] = useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState('');
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    await setEmail(data.email);
  };


 // if user is login, then we'll give it token.. and then redirect to the home page
 const [token] = useToken(googleUser || signInUser);
  // if token is valid, then user will automatically redirect their page..
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true }); 
    }
  }, [token, from, navigate]);


  // for reset/forgetting password
  const [sendPasswordResetEmail, resetSending, resetError] =
    useSendPasswordResetEmail(auth);

    // for loading
  if (googleLoading || signInLoading || resetSending) {
    return <Loader></Loader>;
  }

  // for error showing messages
  let showSignInError ;
  if (googleError || signInError || resetError) {
    showSignInError = (
      <small>
        <p className="text-red-500">
          {googleError?.message || signInError?.message || resetError?.message}
        </p>
      </small>
    );
  }
  
  return (
    <div className="body py-12 pt-20">
      <div className="container mx-auto px-4">
        <div className="md:grid grid-cols-1 w-96 mx-auto gap-8 gy-4 ">
          <div className=" border rounded-lg p-10">
            <div className="login-form">
              <h1 className="text-2xl form-title font-semibold">Login Form</h1>
              <h4 className="form-sub-title">
                Already have an account? Please Login!
              </h4>

              <form onSubmit={handleSubmit(onSubmit)}>
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

               {showSignInError}
                <input type="submit" value="LOGIN" />

                <label className="label my-0 py-0">
                  <span className="label-text-alt">
                    <div className="form-control my-0 py-0">
                      <label onClick={async () => {
                            await sendPasswordResetEmail(email)
                          }} className="cursor-pointer label my-0 py-0">
                        <span
                          
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
                  <Link to="/register">
                    Are you new here? Please Register!
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
  );
};

export default Login;
