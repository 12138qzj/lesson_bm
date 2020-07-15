const USER_DATA = 'user_data'
const ADMIN_KEY = 'admin_key'

export default {
    saveUser(user) {
        localStorage.setItem(USER_DATA, JSON.stringify(user));
    },
    getUser() {
        return JSON.parse(localStorage.getItem(USER_DATA) || null)
    },
    removeUser() {
        localStorage.removeItem(USER_DATA);
    },
    // saveAdmin(admin) {
    //     localStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
    // },
    // getAdmin() {
    //     return JSON.parse(localStorage.getItem(ADMIN_KEY) || null)
    // },
    // removeAdmin() {
    //     localStorage.removeItem(ADMIN_KEY);
    // }
}