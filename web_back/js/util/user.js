// 创建一个user对象
var user = {

    // 用户登录

    // $.post(url,数据).then(回调函数)
    // $.post("http://localhost:8000/admin/login", {
    //     user_name: name,
    //     password: password
    // }).then(function(res) {
    //     console.log(res);
    // });
    // login为方法   
    // 匿名函数  var 变量名=function(){}
    login: function(name, password) {
        // APILIST.user_login 为接口  config.js提供
        return $.post(APILIST.user_login, {
            'user_name': name,
            'password': password
        })
    },

    // 用户退出  函数没有参数，接口也没有数据
    logout: function() {
        return $.post(APILIST.user_logout)
    },
    // 获取信息
    getInfo: function() {
        return $.get(APILIST.user_getInfo)
    }

}