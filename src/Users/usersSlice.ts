import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../api/users/UsersResponse';
import {RootState} from '../store/reducer';
import {startAppListening} from '../store/listenerMiddleware';
import {usersApi} from '../api/users/usersApi';
import {UsersParams} from '../api/users/UsersParams';

export interface UsersState extends Required<Pick<UsersParams, 'seed' | 'results'>>{
    readonly status: 'idle' | 'loading'
}
const usersAdapter = createEntityAdapter<User>({
    selectId: model => model.login.uuid
})

export const initialState = usersAdapter.getInitialState<UsersState>({
    seed: 'users',
    results: 10,
    status: 'idle'
});

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loadMore: state => {
            state.status = 'loading'
        },
        loaded: (state, action: PayloadAction<readonly User[]>) => {
            usersAdapter.upsertMany(state, action.payload)
            state.status = 'idle'
        }
    }
})

export const {reducer: usersReducer, actions: usersActions} = slice;

export const {
    selectAll: selectAllUsers,
    selectTotal: selectTotalUsers
} = usersAdapter.getSelectors<RootState>(state => state.users);

startAppListening({
    actionCreator: usersActions.loadMore,
    effect: (action, api) => {
        const state = api.getState();

        const total = selectTotalUsers(state);
        const {results, seed} = state.users;
        const page = Math.floor(total / results)  + 1;

        api.unsubscribe();

        usersApi.get({page, results, seed})
            .then(users => {
                api.dispatch(usersActions.loaded(users.results))
            })
            .finally(() => {
                api.subscribe();
            })
    }
})
