// 所有文章相关的操作
let article = {
    // 获取文章
    // get: function (page) {
    //     return $.get(APILIST.article_get, {"page": page })
    // }
    // 此行代码功能同上，箭头函数，属性名和变量名相同所以可省略属性名
    // type 为文章类别
    get: (page, state, type) => $.get(APILIST.article_get, { page, state, type }),
    del: id => $.get(APILIST.article_del, { id }),
    add: fd => {
        return $.ajax({
            url: APILIST.article_publish,
            type: "post",
            data: fd,
            // 不允许处理数据
            processData: false,
            // 不设置请求头
            contentType: false
        });
    }
};