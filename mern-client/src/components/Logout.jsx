import React, { useContext } from 'react'
import { AuthContext } from '../contacts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const Logout = () => {
  // ✅ extract logout function from context
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogOut = () => {
    logout()
      .then(() => {
        alert("Signed out successfully!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button
        className='bg-red-700 px-4 py-2 text-white rounded'
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
