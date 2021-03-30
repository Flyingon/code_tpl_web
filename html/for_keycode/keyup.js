
// 响应回车
   $("#search-data").keyup(function (e) {
        var code = e.key; // recommended to use e.key, it's normalized across devices and languages
        if (code === "Enter") e.preventDefault();
        if (code === " " || code === "Enter" || code === "," || code === ";") {
            searchFunc();
        } // missing closing if brace
    });
