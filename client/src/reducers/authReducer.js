// quản lý state phức tạp thì đã có thư viện reducer giúp đơn giản state
export const authReducer = (state, action) => {
	const {
		type,
		payload: { isAuthenticated, user }
	} = action

	switch (type) {
		case 'SET_AUTH':
			return {
				...state,
				authLoading: false,
				isAuthenticated,
				user
			}

		default:
			return state
	}
}
