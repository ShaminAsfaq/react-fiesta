export const signedInAction = (payload) => {
	// console.log('SIGNED IN!')
	return {
		type: 'SIGNED_IN',
		payload
	}
}

export const signedOutAction = (payload) => {
	// console.log('SIGNED OUT!')
	return {
		type: 'SIGNED_OUT',
		payload
	}
}


