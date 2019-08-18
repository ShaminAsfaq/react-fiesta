export const updateTime = (payload) => {
	// console.log(payload)

	if(payload.signedIn) {
		payload['signedInLogged'] = new Date()
	} else {
		payload['signedOutLogged'] = new Date()
	}

	return {
		type: 'TIME_LOGGED',
		payload: payload
	}
}

//	TEST EXPORT
export const renderSecond = (payload) => {
	console.log(payload)
	// return {
	// 	type: 'LOG_STARTED',
	// 	payload: payload
	// }
	return updateTime(payload)
}
