import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth/AuthContext';

export default function PrivateRoute({ children }) {
	const authContext = useContext(AuthContext);

	return authContext.isLogin ? children : <div>404</div>;
}
