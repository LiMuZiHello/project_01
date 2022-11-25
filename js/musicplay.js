// 未完成，需要用到跨域知识
window.addEventListener('load',function(){
// 创建一个随机音乐播放函数
function musicPlay(){
    // 创建一个xhr对象
    var xhr=new XMLHttpRequest();
    // 传输方式和传输地址
    xhr.open('GET','https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472');
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            var data=JSON.parse(xhr.responseText);
            console.log(data);
        }
    }
}
musicPlay();
});
