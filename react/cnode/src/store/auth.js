import { observer, action } from 'mobx';

class Auth {
    @observer isLogin = false;

    @action
    login() {
        this.isLogin = true;

    }
    logout() {
        this.isLogin = false;
    }
}
export default new Auth();