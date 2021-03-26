
// addNavigation 添加导航-依赖bootstrap3
function addNavigation() {
    let nav = $('<div class="row"></div>');
    let ul = $('<ul class="nav nav-pills col-md-6 col-md-offset-3"></ul>');
    let pathName = window.location.pathname;
    for (let uri in routers) {
        let li = $('<li role="presentation"><a href="/trpc_task_schedule_svr/' + uri + '?channel=default#">' + routers[uri] + '</a></li>');
        if (pathName.indexOf(uri) > 0) {
            li.attr("class", "active");
        }
        ul.append(li);
    }
    nav.append(ul);
    $("body").prepend(nav);
}