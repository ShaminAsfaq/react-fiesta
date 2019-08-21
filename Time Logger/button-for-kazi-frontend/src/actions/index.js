// export const updateTime = (payload) => {
// 	// console.log(payload)

// 	if(payload.signedIn) {
// 		payload['signedInLogged'] = new Date()
// 	} else {
// 		payload['signedOutLogged'] = new Date()
// 	}

// 	return {
// 		type: 'TIME_LOGGED',
// 		payload: payload
// 	}
// }

export const signedInAction = (payload) => {
	console.log('SIGNED IN!')
	return {
		type: 'SIGNED_IN',
		payload
	}
}

export const signedOutAction = (payload) => {
	console.log('SIGNED OUT!')
	return {
		type: 'SIGNED_OUT',
		payload
	}
}