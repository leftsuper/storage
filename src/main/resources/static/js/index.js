
/**
 * 打开新标签页
 * @param item 导航栏对象
 */
function open(item){
    $.get(item.url, function (data) {
        $('#tabs').tabs('add',{
            border: false,
            title: item.text,
            content: data,
            closable: true
        });
    })
}

/**
 * 打开新窗口
 * @param id 窗口ID
 */
function openWin(id) {
    $(id).window('open');
}


function submitForm(id, url) {
    $(id).form('submit', {
        url: url,
        success: function (data) {
            alert(data);
        }
    })
}