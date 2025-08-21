import React, { useContext } from 'react'
import { AuthContext } from '../contacts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from "flowbite-react";

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return (
            <div className="flex flex-row gap-3">
                
            </div>
        )
    }
    if(user) {
        return children;
    }
  return (
    <Navigate to="/login" state={{from: location}} replace></Navigate>
  )
}

export default PrivateRouter