import { useState, createContext } from 'react';

export const StateContext = createContext([{}, {}]);

export const stateHandler = () => {
	const [users, setUsers] = useState([
		{ id: 100, userName: 'AmirHossein', password: 123456789 },
		{ id: 101, userName: 'Fatemeh', password: 123456789 },
		{ id: 104, userName: 'Salma', password: 123456789 },
		{ id: 103, userName: 'Asem', password: 123456789 },
		{ id: 102, userName: 'Mohammad', password: 123456789 },
		{ id: 105, userName: 'Negin', password: 123456789 },
	]);

	const [tasks, setTasks] = useState([
		{ id: 0, title: 'Go shopping', isCompleted: false, userID: 100 },
		{ id: 1, title: 'Go swimming', isCompleted: false, userID: 100 },
		{ id: 2, title: 'Go walking', isCompleted: false, userID: 100 },
		{ id: 3, title: 'Go out', isCompleted: false, userID: 100 },
		{ id: 4, title: 'Go running', isCompleted: false, userID: 100 },
		{ id: 5, title: 'Go hiking', isCompleted: false, userID: 101 },
		{ id: 6, title: 'do homework', isCompleted: false, userID: 101 },
		{ id: 7, title: 'Go to the cinema', isCompleted: false, userID: 101 },
		{ id: 8, title: 'do the dishes', isCompleted: false, userID: 101 },
		{ id: 9, title: 'play footbal', isCompleted: false, userID: 102 },
		{ id: 10, title: 'code JS', isCompleted: false, userID: 102 },
		{ id: 11, title: 'learn react', isCompleted: false, userID: 103 },
		{ id: 12, title: 'learn HTML', isCompleted: false, userID: 103 },
		{ id: 13, title: 'learn CSS', isCompleted: false, userID: 100 },
		{ id: 14, title: 'Go to the gym', isCompleted: false, userID: 104 },
		{ id: 15, title: 'Go to the doctor', isCompleted: false, userID: 100 },
		{ id: 16, title: 'Visit my friend', isCompleted: false, userID: 100 },
		{ id: 17, title: 'Go nowhere', isCompleted: false, userID: 100 },
	]);

	return [
		{ users, setUsers },
		{ tasks, setTasks },
	];
};
