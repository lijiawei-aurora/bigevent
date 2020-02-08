// 把所有与文章分类的操作写在这里
let category = {
    get: function() {
        return $.get(APILIST.category_get)
    }
}