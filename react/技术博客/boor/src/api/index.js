import Ajax from './ajax';

export const reqlogin = (username, password) => {
    return Ajax("/login", { username, password }, "POST");
}