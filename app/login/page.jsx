"use client";

import { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {

      if (!isTokenExpired(accessToken)) {

        setIsLoggedIn(true);
      } else {

        refreshAccessToken();
      }
    }
  }, []);

  const isTokenExpired = (accessToken) => {
    const expirationTime = localStorage.getItem('accessTokenExpiration');
    if (!expirationTime) {

      return true;
    }
  
    const currentTime = Date.now();
    const expirationTimestamp = parseInt(expirationTime, 10);
  

    const timeDifference = expirationTimestamp - currentTime;

    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    return daysDifference <= 0;
  };
  

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');

    try {
      const response = await fetch('http://139.59.36.205/api/token/refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refreshToken })
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('accessTokenExpiration', data.accessTokenExpiration);

        setIsLoggedIn(true);

        console.log('Token refresh successful!');
      } else {
        console.log('Token refresh failed!');
        handleLogout();
      }
    } catch (error) {
      console.error('An error occurred during token refresh:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessTokenExpiration');
    setIsLoggedIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username,
      password
    };

    try {
      const response = await fetch('http://139.59.36.205/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('accessTokenExpiration', data.accessTokenExpiration);

        setIsLoggedIn(true);

        console.log('Login successful!');
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        console.log('Login failed:', errorData.message);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <p>You are logged in!</p>
        <button className='btn SignUp w-[281px] h-[60px] left-[164px] top-[373px] absolute text-center text-zinc-100 text-[20px] font-normal' onClick={handleLogout}>Logout</button>
      </div>
    );
  }
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
          <div className="GetStarted w-[632px] h-[142px] left-[124px] top-0 absolute text-black text-[64px] font-medium">
            Welcome Back!
          </div>
          <div className="Username w-[281px] left-[164px] top-[167px] absolute text-neutral-400 text-[20px] font-normal">
            <input
              type="text"
              value={username}
              className="bg-zinc-100 rounded-lg h-[60px] placeholder:px-2 px-2 text-black"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="Password left-[164px] top-[270px] absolute text-neutral-400 text-[20px] font-normal w-[281px]">
            <input
              type="password"
              id="password"
              value={password}
              className="bg-zinc-100 rounded-lg h-[60px] placeholder:px-2 px-2 text-black w-[281px]"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn SignUp w-[281px] h-[60px] left-[164px] top-[373px] absolute text-center text-zinc-100 text-[20px] font-normal"
          >
            Login
          </button>
          <div className="flex justify-center w-[632px] absolute top-[476px] space-x-2">
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
          <div className="AlreadyHaveAnAccountLogIn w-[610px] h-[45px] left-0 top-[579px] absolute text-center text-black text-[20px] font-normal">
            Don't have an account? Sign-Up
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
