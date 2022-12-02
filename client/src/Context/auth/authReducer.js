import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  //   USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  //   USER_DETAILS_RESET,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../types.js";

var switchCases = (state, action) => {
  switch (action.type) {
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userInfo", JSON.stringify(action.payload));

      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        isAuthenticated: true,
      };
    case USER_LOGIN_FAIL:
    case USER_REGISTER_FAIL:
    case USER_DETAILS_FAIL:
    case USER_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        isAuthenticated: null,
        userInfo: null,
        error: action.payload,
      };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default switchCases;
