import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

const messages = {
  en: {
    login: {
      logIn: 'Log in',
      username: 'UserName',
      password: 'Password',
      rolename: 'RoleName',
      forgotPassword: 'Forgot password?',
      signUp: 'Sign up',
      register: 'Register',
      notAccount: "Don't have an account?",
      account: 'Already have an account?',
      uploadIcon: 'Upload icon',
      notInputLogin: 'Please input username and password',
      loginSuccess: 'Login success',
      betop: {
        title: 'Betop',
        content: 'confirm will go to home page',
      },
    },
    hall: {
      rooms: 'Rooms',
      owner: 'House Owner',
      joinGame: 'Join Game',
      welcome: 'Welcome!',
      user: {
        users: 'Online User',
        username: 'Username',
        state: 'State',
      },
      chat: 'Chat List',
      free: 'Free',
      quickJoin: 'Quickly Join',
      roomNum: 'Room Number',
      join: 'Join',
      placeholder: 'Content',
    },
    status: {
      playing: 'is playing',
    },
  },
  zh: {
    login: {
      logIn: '登录',
      username: '用户名',
      password: '密码',
      rolename: '角色名',
      forgotPassword: '忘记密码?',
      signUp: '注册',
      register: '注册',
      notAccount: '还没有账号?',
      account: '已经有账号了?',
      uploadIcon: '上传头像',
      notInputLogin: '请输入账号密码',
      loginSuccess: '登录成功',
      betop: {
        title: '被顶了',
        content: '点击确认按钮回首页',
      },
    },
    hall: {
      rooms: '房间',
      owner: '房主',
      joinGame: '加入游戏',
      welcome: '欢迎您!',
      user: {
        users: '在线用户',
        username: '用户名',
        state: '状态',
      },
      chat: '聊天列表',
      free: '空闲',
      quickJoin: '快速加入',
      roomNum: '房间号',
      join: '加入',
      placeholder: '要发送的内容',
    },
    status: {
      playing: '游戏中',
    },
  },
};

export default new VueI18n({
  locale: 'zh',
  messages,
});
