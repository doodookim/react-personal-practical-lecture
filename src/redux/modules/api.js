import axios from 'axios';

const BASE_URL = 'https://moneyfulpublicpolicy.co.kr';

//회원가입
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Register API Error:', error);
    throw error;
  }
};
//로그인정보
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Login API Error:', error);
    throw error;
  }
};
// 유저정보
export const getUserInfo = async (accessToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/user`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Get User Info API Error:', error);
    throw error;
  }
};

export const updateProfile = async (accessToken, formData) => {
  try {
    const response = await axios.patch(`${BASE_URL}/profile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Update Profile API Error:', error);
    throw error;
  }
};
