// 把所有与文章分类的操作写在这里
// 改为箭头函数
let category = {
    get: () => $.get(APILIST.category_get)
        // get: function() {
        //     return $.get(APILIST.category_get)
        // }
};