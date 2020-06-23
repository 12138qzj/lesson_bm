import Ajax from './ajax';

export const reqlogin = (username, password, type) => {
    return Ajax("/Login_design", { username, password, type }, "POST");
}
export const reqregister = (username, password) => {
    return Ajax("/Register_design", { username, password }, "POST");
}
export const reqgetuser = () => {
    return Ajax("/GetUser", {}, "POST");
}

export const reqgetCarInfo = () => {
    return Ajax("/GetCarInfo", {}, "GET");
}
export const regaltercarinfo = (username, carno) => {
    return Ajax("/AlterCarInfo", { username, carno }, "POST");
}

export const reqgetExitTicket = (username) => {
    return Ajax("/GetExitTicket", username, "Get");
}

export const reqalterUserticket = (no, username, carno, state) => {
    console.log("信息", no, username, carno, state);
    return Ajax("/AlterUserticket", { no, username, carno, state }, "POST");
}