import { Navigate } from "react-router-dom";
import getCookie from "../../lib/getCookie";

export default function PrivateRoute({ children }) {
	const userToken = getCookie(document.cookie)[3];

	return userToken ? children : <Navigate to='/login' replace />;
}
