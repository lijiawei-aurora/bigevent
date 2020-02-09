// 把所有与文章分类的操作写在这里
// 改为箭头函数 return 只有一句可省略return和{}
let category = {
    // 获取文章类型
    get: () => $.get(APILIST.category_get),
    // get: function() {
    //     return $.get(APILIST.category_get)
    // }
    // 添加文章类型
    add: (name, slug) => $.post(APILIST.category_add, { name, slug }),
    // 删除文章类型
    del: id => $.post(APILIST.category_del, { id })
};