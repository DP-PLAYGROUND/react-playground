export interface UsersResponseInfo {
    readonly seed: string,
    readonly results: number,
    readonly page: number,
}

export interface UserName {
    readonly first: string;
    readonly last: string;
}

export interface UserPicture {
    readonly thumbnail: string;
}

export interface UserLogin {
    readonly uuid: string;
}

export interface User {
    readonly name: UserName;
    readonly picture: UserPicture;
    readonly login: UserLogin;
}

export interface UsersResponse {
    readonly info: UsersResponseInfo;
    readonly results: readonly User[];
}
