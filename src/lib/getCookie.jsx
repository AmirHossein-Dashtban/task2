export default function getCookie(cookie) {
	const cookieString = cookie;

	const cookieArray = cookieString.split(';').map((item) => item.trim());

	let userID, userName, userPassword, userToken;

	cookieArray.forEach((item) => {
		if (item.startsWith('userID=')) {
			userID = item.split('=')[1];
		} else if (item.startsWith('userName=')) {
			userName = item.split('=')[1];
		} else if (item.startsWith('userPassword=')) {
			userPassword = item.split('=')[1];
		} else if (item.startsWith('userToken=')) {
			userToken = item.split('=')[1];
		}
	});

	return [userName, userPassword, userID];

	// // Log the results
	// console.log('userID:', userID);
	// console.log('userName:', userName);
	// console.log('userPassword:', userPassword);
	// console.log('userToken:', userToken);
}
