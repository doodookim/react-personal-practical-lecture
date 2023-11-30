import { createSlice } from '@reduxjs/toolkit';

const SET_MEMBER = 'member/SET_MEMBER';

// export const setMember = (payload) => {
//   return { type: SET_MEMBER, payload };
// };

const initialState = '카리나';

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMember: (state, action) => {
      return action.payload;
    },
  },
});

// const member = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_MEMBER:
//       const activeMember = action.payload;
//       return activeMember;
//     default:
//       return state;
//   }
// };
export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;
