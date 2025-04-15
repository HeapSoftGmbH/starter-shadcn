import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import merge from 'lodash/merge';

import { Locale } from '@/types/Locale.type';

type User = {
	id: string;
	email: string;
	signedIn: boolean;
	language?: Locale;
};

const initialState: User = {
	id: '',
	email: '',
	signedIn: false
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetUser: () => initialState,
		setUser: (state, action: PayloadAction<User>) => {
			return merge(state, action.payload);
		},
		setSignedIn: (state, action: PayloadAction<boolean>) => {
			state.signedIn = action.payload;
		},
		setLanguage: (state, action: PayloadAction<Locale>) => {
			state.language = action.payload;
		}
	}
});

export const { setUser, setSignedIn, resetUser, setLanguage } = userSlice.actions;
export const { reducer } = userSlice;
