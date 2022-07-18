import axios from 'axios';
import {UsersParams} from './UsersParams';
import {UsersResponse} from './UsersResponse';

const provider = axios.create({
    baseURL: 'https://randomuser.me/api/'
})

const get = (params?: UsersParams) => provider.get<UsersResponse>('', {params}).then(res => res.data);

export const usersApi = {
    get
}
