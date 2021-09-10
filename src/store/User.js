import { observable, action } from 'mobx'

import * as userAPI from "../axios/user-service";

class User {
  @observable email = null;
  @observable username = null;
  @observable password = null;
  @observable nickname = null;
  @action reset = () => {
    this.email = "";
    this.username = "";
    this.password = "";
    this.nickname = "";
  }
  @action setEmail = (val) => {
    this.email = val;
  };
  @action setPassword = (val) => {
    this.password = val;
  };
  @action setUsername = (val) => {
    this.username = val;
  }
  @action setNickname = (val) => {
    this.nickname = val;
  };
}
