import { Outlet, Navigate } from "react-router-dom";

const AuthRoute = () => {
    const accesstoken = localStorage.getItem("accesstoken");

    return accesstoken ? <Navigate to="/" /> : <Outlet />
}

export default AuthRoute;