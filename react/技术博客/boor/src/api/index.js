import Ajax from './ajax';

export const reqlogin = (username, password, type) => {
    return Ajax("/Login_design", { username, password, type }, "POST");
}
export const reqregister = (username, password) => {
    return Ajax("/Register_design", { username, password }, "POST");
}