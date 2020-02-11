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
    user_getInfo: BASEURL + "/admin/getuser",

    // 文章类别获取
    category_get: BASEURL + "/admin/category_search",
    // 新增文章类别
    category_add: BASEURL + "/admin/category_add",
    // 删除文章类别
    category_del: BASEURL + "/admin/category_delete",
    // 编辑文章类别
    category_edit: BASEURL + "/admin/category_edit",
    // 获取文章信息
    article_get: BASEURL + "/admin/search",
    // 发布文章
    article_publish: BASEURL + "/admin/article_publish",
    // 文章编辑
    article_edit: BASEURL + "/admin/article_edit",
    // 删除文章
    article_edit: BASEURL + "/admin/article_delete"
};