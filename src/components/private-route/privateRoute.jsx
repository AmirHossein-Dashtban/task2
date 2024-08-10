import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!authContext.isLogin) {
			navigate('/login');
		}
	}, []);

	return children;
}
