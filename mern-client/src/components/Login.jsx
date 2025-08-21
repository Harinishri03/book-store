import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contacts/AuthProvider'
import googleLogo from "../assets/googlelogo.png"

const Login = () => {
  const { login, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // email/password login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("User logged in successfully!!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // google login
  const handleRegister = () => {
    loginwithGoogle()
      .then((result) => {
        alert("Logged in successfully!!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Login Form</h1>

            <form onSubmit={handleLogin} className="py-8 text-base space-y-4">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Email address"
                />
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              {error ? <p className='text-red-700 text-base'>Email or Password is incorrect.</p> : ""}

              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-700 underline">
                  Create new Account
                </Link>
              </p>

              <div className="relative">
                <button className="bg-blue-500 text-white rounded-md px-6 py-2 cursor-pointer">
                  Login
                </button>
              </div>
            </form>

            <div className="flex w-full items-center flex-col mt-5 gap-3">
              <button
                onClick={handleRegister}
                className="block cursor-pointer"
              >
                <img
                  src={googleLogo}
                  alt="google login"
                  className="w-5 h-5 inline-block"
                />{" "}
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
