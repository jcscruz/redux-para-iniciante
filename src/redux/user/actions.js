import userActionTypes from '../../redux/user/action-types'

export const loginUser = (payload) => ({
    type: userActionTypes.LOGIN,
    payload
})

export const logOutUser = (payload) => ({
    type: userActionTypes.LOGOUT,
})