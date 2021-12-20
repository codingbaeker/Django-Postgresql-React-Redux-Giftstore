export interface User{
    id: number;
    username: string;
    email: string;
    name: string;
    birthday?: Date;
    token?: string;
    refreshToken?: string;
    password: string;
}