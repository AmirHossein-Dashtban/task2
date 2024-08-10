import { useState, createContext } from 'react';

export const AuthContext = createContext({});

export const [isLogin, setIsLogin] = useState(false);

export const handleLogout = (navigation) => {
	setIsLogin(false);

	document.cookie = `userToken=; expires=; path=/`;
	document.cookie = `userID=; expires=; path=/`;
	document.cookie = `userName=; expires=; path=/`;
	document.cookie = `userPassword=; expires=; path=/`;
};
