const USER_KEY = 'user_key'
const ADMIN_KEY = 'admin_key'

export default {
    saveUser(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    },
    getUser() {
        return JSON.parse(localStorage.getItem(USER_KEY) || null)
    },
    removeUser() {
        localStorage.removeItem(USER_KEY);
    },
    saveAdmin(admin) {
        localStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
    },
    getAdmin() {
        return JSON.parse(localStorage.getItem(ADMIN_KEY) || null)
    },
    removeAdmin() {
        localStorage.removeItem(ADMIN_KEY);
    }
}