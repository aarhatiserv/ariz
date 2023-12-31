import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";

function SignUp() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(user);

    axios
      .post("https://ariz.onrender.com/api/user/reg", user)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "You have successfully signed up!",
            icon: "success",
            confirmButtonText: "ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("./SignIn.js");
            }
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Please try again!",
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Please try again!",
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };

  // const responseGoogle = (response) => {
  //   console.log(response);
  //   if (response && response.profileObj) {
  //     setUser({
  //       email: response.profileObj.email,
  //       password: "",
  //     });

  //     handleSignUp();
  //   }
  // };

  // const responseGoogle = async (response) => {
  //   if (response.profileObj) {
  //     // Send the ID token to your server for verification
  //     try {
  //       const idToken = response.tokenId;
  //       const res = await fetch("http://localhost:5000/auth/google", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ idToken }),
  //       });

  //       if (res.status === 200) {
  //         const user = await res.json();
  //         console.log("User:", user);
  //       } else {
  //         console.error("Server authentication failed");
  //       }
  //     } catch (error) {
  //       console.error("Server request failed", error);
  //     }
  //   } else {
  //     console.error("Google authentication failed");
  //   }
  // };
  return (
    <div>
      <div class="h-full">
        <div
          class=" flex h-full items-center py-6"
          style={{ background: "#FEFCFB" }}
        >
          <main class="w-full max-w-md mx-auto p-6">
            <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm  ">
              <div class="p-4 sm:p-7">
                <div class="text-center">
                  <h1 class="block text-2xl font-bold text-gray-800 ">
                    Sign up
                  </h1>
                </div>

                <div class="mt-5">
                  {/* <GoogleLogin
                    clientId="543911932766-cq750g05dir8g2pd3qrtt8kkskulkvjl.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    uxMode="popup"
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                      >
                        <svg
                          class="w-4 h-auto"
                          width="46"
                          height="47"
                          viewBox="0 0 46 47"
                          fill="none"
                        >
                          <path
                            d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                            fill="#34A853"
                          />
                          <path
                            d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                            fill="#EB4335"
                          />
                        </svg>
                        Sign in with Google
                      </button>
                    )}
                  /> */}

                  <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 ">
                    Or
                  </div>

                  <form>
                    <div class="grid gap-y-4">
                      <div>
                        <label for="email" class="block text-sm mb-2 ">
                          Email address
                        </label>
                        <div class="relative">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
                            class="py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                            required
                            aria-describedby="email-error"
                          />
                          <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg
                              class="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p
                          class="hidden text-xs text-red-600 mt-2"
                          id="email-error"
                        >
                          Please include a valid email address so we can get
                          back to you
                        </p>
                      </div>

                      <div>
                        <label for="password" class="block text-sm mb-2 ">
                          Username
                        </label>
                        <div class="relative">
                          <input
                            type="text"
                            value={user.username}
                            onChange={(e) =>
                              setUser({ ...user, username: e.target.value })
                            }
                            name="username"
                            id="username"
                            placeholder="username"
                            class="py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                            required
                            aria-describedby="password-error"
                          />
                          <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg
                              class="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          for="confirm-password"
                          class="block text-sm mb-2"
                        >
                          Password
                        </label>
                        <div class="relative">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={(e) =>
                              setUser({ ...user, password: e.target.value })
                            }
                            class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                            required
                            aria-describedby="confirm-password-error"
                          />
                          <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg
                              class="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p
                          class="hidden text-xs text-red-600 mt-2"
                          id="confirm-password-error"
                        >
                          Password does not match the password
                        </p>
                      </div>

                      <div class="flex items-center">
                        <div class="flex">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 "
                          />
                        </div>
                        <div class="ml-3">
                          <label for="remember-me" class="text-sm ">
                            I accept the{" "}
                            <a
                              class="text-blue-600 decoration-2 hover:underline font-medium"
                              href="!#"
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>

                      <button
                        onClick={handleSignUp}
                        type="submit"
                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
