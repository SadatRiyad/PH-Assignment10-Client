/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if (!user) {
        if (loading) {
            return <div className="flex w-full items-center justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
        }
        return <Navigate to="/login" state={{ from: location.pathname || "/" }} />;
    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;