import { Navigate, Outlet } from "react-router-dom";
import getCookie from "../lib/getCookie";
const Protected = () => {
    const token = getCookie(document.cookie)[3];

    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Protected;