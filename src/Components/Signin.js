import React, { useState } from "react";
import Header from "./Header";

const Signin = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg")',
        }}
      >
        <div className=" bg-cover bg-center bg-gradient-to-b from-black">
          <Header></Header>
          <div className="flex items-center justify-center mt-10">
            <div className="p-6 m-2 w-4/12 bg-black/75 h-fit rounded-md">
              <h1 className="text-white text-3xl font-bold ml-6">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>
              <form className="p-5 pb-0 flex flex-col items-center content-center text-white">
                {!isSignInForm && (
                  <input
                    className="p-4 m-4 bg-n w-full rounded-sm bg-gray-700"
                    type="text"
                    placeholder="Full Name"
                  ></input>
                )}
                <input
                  className="p-4 m-4 bg-n w-full rounded-sm bg-gray-700"
                  type="text"
                  placeholder="Email Address"
                ></input>
                <input
                  className="p-4 m-4 w-full rounded-sm bg-gray-700"
                  type="password"
                  placeholder="Password"
                ></input>
                <button
                  className="p-4 m-4 mt-4 bg-red-700 w-full rounded-lg text-white"
                  type="button"
                >
                  {isSignInForm ? "Sign In" : "SignUp"}{" "}
                </button>
              </form>
              <div className="flex justify-between px-6">
                <div className="flex gap-1">
                  <input
                    className="bg-neutral-500 w-4 h-6"
                    type="checkbox"
                    name="Remember Me"
                  ></input>
                  <p className="text-neutral-500">Remember Me</p>
                </div>
                <p className="text-neutral-500">Need Help?</p>
              </div>
              <div className="p-6 mt-6">
                <p className="text-neutral-500">
                  { isSignInForm ? 'New to Netflix?' : 'Already a User'}
                  <span
                    className="font-bold cursor-pointer text-white ml-2 hover:underline"
                    onClick={toggleSignInForm}
                  >
                   { isSignInForm ? 'Sign up Now' : 'Sign In Now'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
