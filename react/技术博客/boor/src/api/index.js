import Ajax from './ajax';

export const reqlogin = (username, password) => {
    return Ajax("/Login_design", { username, password }, "POST");
}