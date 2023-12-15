import * as types from './actionType'

const initialState = {
    loading: false,
    CurrentUser: null,
    error: null
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            case types.GOOGLE_SIGN_IN_START:
            return {
                ...state,
                loading: true
            }

        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                CurrentUser: null
            }


        case types.SET_USER:
            return{
                ...state,
                CurrentUser:action.payload
            }

        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            case types.GOOGLE_SIGN_IN_SUCCESS:
            console.log(action.payload,'reducer')
            return {
                ...state,
                loading: false,
                CurrentUser: action.payload
            }

        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        case types.LOGOUT_FAIL:
            case types.GOOGLE_SIGN_IN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }


        default:
            return state
    }
}

export default UserReducer