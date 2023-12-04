import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  accessToken: null,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      console.log('login');
      console.log(action);
      state.isLogin = true;
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.error = null;
    },
    setLogout: (state) => {
      console.log('logout');
      state.isLogin = false;
      state.accessToken = null;
      state.user = null;
      state.error = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
