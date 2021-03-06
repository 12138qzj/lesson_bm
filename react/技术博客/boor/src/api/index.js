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
export const regaltercarinfo = (username, carno, date) => {
    return Ajax("/AlterCarInfo", { username, carno, date }, "POST");
}

export const reqgetExitTicket = (username) => {
    return Ajax("/GetExitTicket", username, "Get");
}

export const reqalterUserticket = (no, username, carno, state) => {
    console.log("信息", no, username, carno, state);
    return Ajax("/AlterUserticket", { no, username, carno, state }, "POST");
}
export const reqAddCarInfo = (data) => {
    console.log("信息", data);
    return Ajax("/AddCarInfo", data, "POST");
}
export const reqDeleteUser = (username) => {
    console.log("信息", username);
    return Ajax("/DeleteUser", username, "POST");
}

export const reqDeleteUserTicket = (no, user, carno) => {
    console.log("信息", user, carno, no);
    return Ajax("/DeleteUserTicket", { user, carno, no }, "POST");
}

export const reqDeleteCarinfo = (carno) => {
    console.log("信息", carno);
    return Ajax("/DeleteCarinfo", carno, "POST");
}