"use client";

import React, { useState } from "react";

const SignUpPage = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const value = {
    username: username,
    name: name,
    email: email,
    password: password,
    confirm_password: confirm_password,
    phone_number: phone_number,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://139.59.36.205/api/customers/create-account/",
      {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    console.log(data);
    console.log(value);
    console.log(result);
  };

  return (
    <div className="SignUpPage w-[1440px] h-[1024px] relative bg-white">
      <div className="Images w-[778px] h-[1045px] left-[-91px] top-0 absolute">
        <div className="Rectangle36 w-[687px] left-[91px] top-0 absolute" />
        <img
          className="PmvChamara5hy0sznppzqUnsplash1 w-[399px] h-[266px] left-[379px] top-0 absolute"
          src="/auth_images/signup1.png"
        />
        <img
          className="PmvChamara1hm2h47xb9yUnsplash1 w-[399px] h-[266px] left-[91px] top-0 absolute"
          src="/auth_images/signup2.png"
        />
        <img
          className="PmvChamaraOxyoft9gtoeUnsplash1 w-[322px] h-[580px] left-[456px] top-[266px] absolute"
          src="/auth_images/signup5.png"
        />
        <img
          className="PmvChamara8HakyqsyyuUnsplash1 w-[456px] h-[200px] left-0 top-[646px] absolute"
          src="/auth_images/signup4.png"
        />
        <img
          className="HonzaVojtekUtbyu3uhbvmUnsplash1 w-[365px] h-[400px] left-[91px] top-[266px] absolute"
          src="/auth_images/signup3.png"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="GetStarted w-[636px] h-[885px] -right-20 top-[49px] absolute">
          <div className="GetStarted w-[632px] h-[142px] left-[4px] top-0 absolute text-black text-[64px] font-medium">
            Get Started!
          </div>
          <div className="Username w-[281px] left-[4px] top-[167px] absolute text-neutral-400 text-[20px] font-normal">
            <input
              type="text"
              name="username"
              id=""
              className="bg-zinc-100 rounded-lg h-[60px] placeholder:px-2 px-2 text-black"
              placeholder="Username"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div className="EmailAddress w-[632px] h-[72px] left-[4px] top-[270px] absolute text-neutral-400 text-[20px] font-normal">
            <input
              type="email"
              id="email"
              className="bg-zinc-100 rounded-lg h-[60px] placeholder:px-2 px-2 text-black w-[632px]"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="number w-[632px] h-[72px] left-[4px] top-[373px] absolute text-neutral-400 text-[20px] font-normal">
            <input
              type="tel"
              id="phone_number"
              className="bg-zinc-100 rounded-lg h-[60px] placeholder:px-2 px-2 text-black w-[632px]"
              placeholder="Mobile Number"
              onChange={(event) => {
                setPhone_number(event.target.value);
              }}
            />
          </div>
          <div className="Password h-[72px] left-[4px] top-[476px] absolute text-neutral-400 text-[20px] font-normal w-[632px]">
            <input
              type="password"
              id="password"
              className="bg-zinc-100 rounded-lg h-[60px] placeholder:px-2 px-2 text-black w-[632px]"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="ConfirmPassword w-[632px] h-[72px] left-[4px] top-[579px] absolute text-neutral-400 text-[20px] font-normal">
            <input
              type="password"
              id="confirm_password"
              className="bg-zinc-100 rounded-lg h-[60px] placeholder:px-2 px-2 text-black w-[632px]"
              placeholder="Confirm Password"
              onChange={(event) => {
                setConfirm_password(event.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn SignUp w-[281px] h-[60px] left-[164px] top-[682px] absolute text-center text-zinc-100 text-[20px] font-normal"
            onClick={(e) => setData({ ...data, name: e.target.value })}
          >
            Sign Up
          </button>
          <div className="FirstName w-[281px] h-[72px] left-[333px] top-[167px] absolute text-neutral-400 text-[20px] font-normal">
            <input
              type="text"
              name=""
              id=""
              className="bg-zinc-100 rounded-lg h-[60px] placeholder:px-2 px-2 text-black"
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="Line3 w-[272px] h-[0px] left-[4px] top-[785px] absolute border border-black"></div>
          <div className="Line4 w-[272px] h-[0px] left-[342px] top-[784px] absolute border border-black"></div>
          <div className="Or w-[60px] h-[35px] left-[283px] top-[768px] absolute text-center text-black text-[20px] font-normal">
            OR
          </div>
          <div className="flex justify-center w-[632px] absolute top-[823px] space-x-2">
            <div className="Rectangle43 w-48 h-[72px] bg-zinc-100 rounded-lg text-black flex justify-center items-center">
              <p>Google</p>
            </div>
            <div className="Rectangle43 w-48 h-[72px] bg-zinc-100 rounded-lg text-black flex justify-center items-center">
              <p>Google</p>
            </div>
            <div className="Rectangle43 w-48 h-[72px] bg-zinc-100 rounded-lg text-black flex justify-center items-center">
              <p>Google</p>
            </div>
          </div>
          <div className="AlreadyHaveAnAccountLogIn w-[610px] h-[45px] left-0 top-[943px] absolute text-center text-black text-[20px] font-normal">
            Already have an account? Log In
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
