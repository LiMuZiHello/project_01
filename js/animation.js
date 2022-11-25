function animation(object,target,callback){
    //定时器运动之前先关闭上一个定时器
    clearInterval(object.timer);
    object.timer=setInterval(function(){
        var step=(target - object.offsetLeft)/8;
        step=step>0?Math.ceil(step):Math.floor(step);
        if(target==object.offsetLeft){
            clearInterval(object.timer);
        }else{
            object.style.left=object.offsetLeft+step+'px';
        }
    },30);
};