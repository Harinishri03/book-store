import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contacts/AuthProvider';
import googleLogo from "../assets/googlelogo.png";
import { updateProfile } from "firebase/auth"; 

const Signup = () => {
  const { createUser, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

      
        updateProfile(user, {
          displayName: name,
          phoneNumber: phone, 
        })
          .then(() => {
            alert("User signed up successfully!");
            navigate(from, { replace: true });
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  
  const handleRegister = () => {
    loginwithGoogle()
      .then((result) => {
        const user = result.user;
        alert("Logged in successfully!");
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
            <h1 className="text-2xl font-semibold">Sign Up</h1>
            <form onSubmit={handleSignUp} className="py-8 space-y-4">
              {/* Full Name */}
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Full Name"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Phone Number"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Email Address"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Error message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-700 underline">
                  Login here
                </Link>
              </p>

              <button className="bg-blue-500 text-white rounded-md px-6 py-2 w-full">
                Sign Up
              </button>
            </form>

            {/* Google Login */}
            <div className="flex w-full items-center flex-col mt-5 gap-3">
              <button
                onClick={handleRegister}
                className="flex items-center gap-2 border px-4 py-2 rounded cursor-pointer"
              >
                <img src={googleLogo} alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
