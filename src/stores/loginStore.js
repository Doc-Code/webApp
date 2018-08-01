import { observable, action } from 'mobx';

class LoginStore {
    @observable userLogged;
  constructor() {
    this.userLogged = false;
  }
    @action auth() {
      const request = require('request');
      const v = '1.0';
      const login = 'admin';
      const AuthKey = '1bc14840fa3fdd00e992787b9be31239';
      const authRequest = {
        v,
        login
      };

      request.post({
        url:     'https://avto-chat.clientbase.ru/api/auth/request/',
        body:   JSON.stringify(authRequest)
      }, (error, response, body) => {
        const authRequestBody = JSON.parse(body);
        const authAuth = {
          v,
          login,
          'hash': require('md5')(authRequestBody.salt + AuthKey)
        };

        request.post({
          url: 'https://avto-chat.clientbase.ru/api/auth/auth/',
          body: JSON.stringify(authAuth)
        }, (error, response, body) => {
          const authAuthBody = JSON.parse(body);
          const accessId = authAuthBody.access_id;

          if (accessId !== 'null') {
            console.log(`accessID ${  accessId}`);
            this.userLogged = true;
          }
        });
      });
    }

}

const loginStore = new LoginStore();


export default loginStore;
export { LoginStore };
