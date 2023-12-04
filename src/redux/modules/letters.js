import { createSlice } from '@reduxjs/toolkit';
import fakeData from 'fakeData.json';

const initialState = fakeData;
const aespaSlice = createSlice({
  name: 'letters',
  initialState,
  reducers: {
    addLetter: (state, action) => {
      return [action.payload, ...state];
    },
    deleteLetter: (state, action) => {
      return state.filter((letter) => letter.id !== action.payload);
    },
    editLetter: (state, action) => {
      const { id, editingText } = action.payload;
      return state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: editingText };
        }
        return letter;
      });
    },
  },
});

export const { addLetter, deleteLetter, editLetter } = aespaSlice.actions;
export default aespaSlice.reducer;

// 팬레터 추가
// const ADD_LETTER = "letters/ADD_LETTER";
// // 팬레터 삭제
// const DELETE_LETTER = "letters/DELETE_LETTER";
// // 팬레터 수정
// const EDIT_LETTER = "letters/EDIT_LETTER";

// export const addLetter = (payload) => {
//   return { type: ADD_LETTER, payload };
// };
// export const deleteLetter = (payload) => {
//   return { type: DELETE_LETTER, payload };
// };
// export const editLetter = (payload) => {
//   return { type: EDIT_LETTER, payload };
// };
// reducer
// const letters = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_LETTER:
//       const newLetter = action.payload;
//       return [newLetter, ...state];
//     case DELETE_LETTER:
//       const letterId = action.payload;
//       return state.filter((letter) => letter.id !== letterId);
//     case EDIT_LETTER:
//       const { id, editingText } = action.payload;
//       return state.map((letter) => {
//         if (letter.id === id) {
//           return { ...letter, content: editingText };
//         }
//         return letter;
//       });
//     default:
//       return state;
//   }
// };

// export default letters;

// 순수 리덕스에서는 !
// action creator를 export했음
// reducer를 export 했음
// action value도 정의 했었음
