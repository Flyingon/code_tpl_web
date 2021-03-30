
// getQuery 从url获取参数
function getQuery() {
    const urlSearch = decodeURI(location.search); // 获取url中"?"符后的字串(包括问号)
    let query = {};
    if (urlSearch.indexOf("?") !== -1) {
        const str = urlSearch.substr(1);
        const pairs = str.split("&");
        for (let i = 0; i < pairs.length; i++) {
            const pair = pairs[i].split("=");
            query[pair[0]] = pair[1];
        }
    }
    return query;  // 返回对象
}
