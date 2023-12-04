import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  nickname: '',
  avatar: '',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      console.log(state);
      state.nickname = action.payload.nickname;
      state.avatar = action.payload.avatar;
      state.error = null;
    },
    updateUser: (state, action) => {
      state.nickname = action.payload.nickname;
      state.avatar = action.payload.avatar;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, updateUser, setError } = userSlice.actions;
export default userSlice.reducer;
