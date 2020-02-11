// 所有文章相关的操作
let article = {
    // 获取文章
    get: () => $.get(APILIST.article_get)
};