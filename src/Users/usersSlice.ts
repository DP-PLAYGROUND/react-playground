import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {User} from '../api/users/UsersResponse';
import {RootState} from '../store/reducer';

const usersAdapter = createEntityAdapter<User>({
    selectId: model => model.login.uuid
})

const initialState = usersAdapter.getInitialState();

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const {reducer: usersReducer, actions: usersActions} = slice;

export const {
    selectAll: selectAllUsers
} = usersAdapter.getSelectors<RootState>(state => state.users);
