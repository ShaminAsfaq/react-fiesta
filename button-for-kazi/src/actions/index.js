export const getTime = (payload) => {
    console.log(payload)

    if (payload) {
        payload.buttonText = 'Click to Sign In'
        payload.icon = 'play icon'
    }

    return {
        type: 'TIME_LOGGED',
        payload: payload
    }
}

