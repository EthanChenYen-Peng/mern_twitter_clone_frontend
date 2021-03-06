import axios from "axios";
import {
  REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERROR,
  LOGIN_SUCCESS, LOGIN_FAIL, UPDATE_USER_FAIL, UPDATE_USER_SUCCESS,
  LOAD_USER_FAIL, LOAD_USER_SUCCESS, SET_IS_LAODING, LOGOUT,
} from "./authType";

// const baseUrl = "http://localhost:5000/v1/users";
const backEnd = process.env.REACT_APP_BACKEND_URL;
const baseUrl = backEnd + "/v1/users";
const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    setAuthHeader(localStorage.token);
    dispatch({
      type: SET_IS_LAODING,
    });
    const response = await axios.get(`${baseUrl}/auth`);
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: response.data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const registerUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, data);
    const { user, token } = response.data;
    setAuthHeader(token);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { user, token },
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, data);
    const { user, token } = response.data;
    setAuthHeader(token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user, token },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const logout = () => ({
  type: LOGOUT,
});
export const updateUser = (data, id) => async (dispatch) => {
  try {
    const response = await axios.patch(`${baseUrl}/${id}`, data);
    const { user } = response.data;
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
