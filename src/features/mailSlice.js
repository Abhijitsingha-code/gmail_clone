import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    selectedMail:null,
    onComposeChange: false
  },
  reducers: {
    selectsMail: (state, action) =>{
      state.selectedMail= action.payload;
    },
    openCompose: (state) => {
      state.onComposeChange = true;
    },
    closeCompose: (state) => {
      state.onComposeChange = false;
    }
  },

});

export const { selectsMail , openCompose, closeCompose } = mailSlice.actions;
export const selectedMail = (state) => state.mail.selectedMail;
export const selectMail = (state) => state.mail.onComposeChange;

export default mailSlice.reducer;
