import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbLogin2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import gLogo from "/src/assets/googleLogo.png";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here (e.g., send login request)
    console.log("Submitting:", { email, password });
    // Clear form fields after submission
    setEmail("");
    setPassword("");
  };

  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="fixed inset-0 flex items-center flex-col backdrop-blur-sm justify-center bg-black bg-opacity-60 z-20">
      <div className="flex items-end flex-col bg-white p-5 rounded-lg">
        <Link to={"/"}>
          <button className="mb-5 bg-gray p-1 rounded-full">
            <IoClose />
          </button>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
          <h3 className="text-3xl font-semibold">Welcome back!</h3>
          <p className="text-xs mb-3 -mt-3 text-center w-60">
            Log in to enjoy our food without any extra delivery charges!
          </p>

          <div className="flex items-center cursor-pointer justify-center gap-2 border px-2 w-80 h-9">
            <img src={gLogo} alt="google-logo" />
            <span className="text-sm text-darkgray">Continue with Google</span>
          </div>

          <span className="text-darkgray text-sm relative">
            {" "}
            <span className="w-32 h-0.5 bg-gray absolute -left-36 top-1/2">
              {" "}
            </span>
            OR{" "}
            <span className="w-32 h-0.5 bg-gray absolute -right-36 top-1/2">
              {" "}
            </span>
          </span>

          <input
            className="bg-white outline-none border px-2 w-80 h-9 text-sm"
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={handleEmailChange}
            required
          />
          <div className="relative">
            <input
              className="bg-white outline-none border px-2 w-80 select-none h-9 text-sm"
              type={showPass ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
              required
            />

            {showPass ? (
              <BsFillEyeFill
                onClick={handleShowPass}
                className="absolute top-2.5 right-4 opacity-40 select-none cursor-pointer"
              />
            ) : (
              <BsFillEyeSlashFill
                onClick={handleShowPass}
                className="absolute top-2.5 right-4 opacity-40 select-none cursor-pointer"
              />
            )}
          </div>
          <button
            type="submit"
            className="flex mt-3 items-center gap-1 text-xs bg-main text-white px-6 py-2.5 rounded-full font-medium tracking-2"
          >
            <TbLogin2 />
            Log in
          </button>

          <p className="text-xs">
            Don't have an account?{" "}
            <Link to={"/signup"} className="underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
