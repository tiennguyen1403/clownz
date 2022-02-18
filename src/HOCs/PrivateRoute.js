import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const accesstoken = localStorage.getItem("accesstoken");

    return accesstoken ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute;