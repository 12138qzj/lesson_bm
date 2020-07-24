import { observable, action } from 'mobx';

class Auth {
    @observable isLogin = false;

    @action
    login() {
        this.isLogin = true;

    }
    logout() {
        this.isLogin = false;
    }
}
export default new Auth();