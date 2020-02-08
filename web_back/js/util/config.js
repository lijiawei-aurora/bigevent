// 配置文件
// 把这个项目中所有用到的接口地址全放在这里

// 所有接口的基地址  const 是ES6中定义常量的
const BASEURL = "http://192.168.1.105:8000";

// 用来保存所有的接口信息
const APILIST = {
    // 登录
    user_login: BASEURL + "/admin/login",
    // 退出登录
    user_logout: BASEURL + "/admin/logout",
    // 获取用户信息
    user_getInfo: BASEURL + "/admin/getuser"
};