
$(function(){
//给头部直播按钮添加一个移入下滑按钮
    $('.zhibo').on('mouseenter',function(){
        $('.zhiboBoxA').stop().fadeIn();
    });   
    $('.zhibo').on('mouseleave',function(){
        $('.zhiboBoxA').stop().fadeOut();
    });   
    $('.zhiboBoxA').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.zhiboBoxA').on('mouseleave',function(){
        $(this).stop().fadeOut();
    });
//给首页按钮添加一个移入下滑按钮
    $('.icon-arrow-down').on('mouseenter',function(){
        $('.shouye').stop().fadeIn();
    });   
    $('.icon-arrow-down').on('mouseleave',function(){
        $('.shouye').stop().fadeOut();
    });   
    $('.shouye').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.shouye').on('mouseleave',function(){
        $(this).stop().fadeOut();
    });
//给游戏按钮添加一个移入下滑按钮
    $('.youxizhonxin').on('mouseenter',function(){
        $('.youxi').stop().fadeIn();
    });   
    $('.youxizhonxin').on('mouseleave',function(){
        $('.youxi').stop().fadeOut();
    });   
    $('.youxi').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.youxi').on('mouseleave',function(){
        $(this).stop().fadeOut();
    });
    // 漫画区域
    //给漫画按钮添加一个移入下滑按钮
    $('.manhuaH').on('mouseenter',function(){
        $('.manhua').stop().fadeIn();
    });   
    $('.manhuaH').on('mouseleave',function(){
        $('.manhua').stop().fadeOut();
    });   
    $('.manhua').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.manhua').on('mouseleave',function(){
        $(this).stop().fadeOut();
    });
    //下载app区
    $('.xiaZaiApp').on('mouseenter',function(){
        $('.xiaZai').stop().fadeIn();
    });   
    $('.xiaZaiApp').on('mouseleave',function(){
        $('.xiaZai').stop().fadeOut();
    });   
    $('.xiaZai').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.xiaZai').on('mouseleave',function(){
        $(this).stop().fadeOut();
    });
    //投稿区
    $('.touGaoTab').on('mouseenter',function(){
        $('.touGao').stop().fadeIn();
    });   
    $('.touGaoTab').on('mouseleave',function(){
        $('.touGao').stop().fadeOut();
    });   
    $('.touGao').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.touGao').on('mouseleave',function(){
        $(this).stop().fadeOut();
    });
    // 历史区
    $('.lishidianji').on('mouseenter',function(){
        $('.lishi').stop().fadeIn();
    });   
    $('.lishidianji').on('mouseleave',function(){
        $('.lishi').stop().fadeOut();
    });   
    $('.lishi').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.lishi').on('mouseleave',function(){
        $(this).stop().fadeOut();
    });
    //收藏区
    $('.shoucang').on('mouseenter',function(){
        $('.shouCang').stop().fadeIn();
    });   
    $('.shoucang').on('mouseleave',function(){
        $('.shouCang').stop().fadeOut();
    });   
    $('.shouCang').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.shouCang').on('mouseleave',function(){
        $(this).stop().fadeOut();
    });
    //消息区
    $('.xiaoxi').on('mouseenter',function(){
        $('.xiaoxiA').stop().fadeIn();
    });   
    $('.xiaoxi').on('mouseleave',function(){
        $('.xiaoxiA').stop().fadeOut();
    });   
    $('.xiaoxiA').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.xiaoxiA').on('mouseleave',function(){
        $(this).stop().fadeOut();
    });
    //大会员
    $('.dahuiyuan').on('mouseenter',function(){
        $('.dahuiyuanA').stop().fadeIn();
    });   
    $('.dahuiyuan').on('mouseleave',function(){
        $('.dahuiyuanA').stop().fadeOut();
    });   
    $('.dahuiyuanA').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.dahuiyuanA').on('mouseleave',function(){
        $(this).stop().fadeOut();
    });
    //头像区域
    $('.touxiang').on('mouseenter',function(){
        $('.touxiangA').stop().fadeIn();
    }); 
    $('.touxiang').on('mouseleave',function(){
        $('.touxiangA').stop().fadeOut();
    });   
    $('.touxiangA').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.two').on('mouseenter',function(){
        $('.six').stop().fadeIn();
    }); 
    $('.six').on('mouseenter',function(){
        $(this).stop();
    }); 
    $('.six').on('mouseleave',function(){
        $(this).stop().fadeOut();
    }); 
    $('.two').on('mouseleave',function(){
        $('.six').stop().fadeOut();
    });  
    $('.touxiangA').on('mouseleave',function(){
        $(this).stop().fadeOut();
    });
});
    window.addEventListener('load',function(){
        //卷去头部区域
        var daBox=document.querySelector('.dabox');
        // console.log(daBox.offsetHeight);
        var Height=daBox.offsetHeight;
        document.addEventListener('scroll',function(){
            if(window.pageYOffset>Height){
                daBox.style.background='none';
                daBox.style.backgroundColor='rgba(255,192,203,1)';
            }else{
                daBox.style.backgroundColor='none';
                daBox.style.background='-webkit-linear-gradient(top,rgba(0, 0, 0,0.5),rgba(255, 255, 255,0))';
                
            }
        });
        // 游戏区域
        var youXiALi=document.querySelector('.youxiA').querySelector('.right').querySelectorAll('li');
        var youXiImgs=document.querySelector('.YouXiImg');
        var youXiImgLi=document.querySelector('.YouXiImg').querySelectorAll('li');
        // console.log(youXiImgLi);
        for(var i=0;i<youXiALi.length;i++){
            // 给节点添加自定义属性
            youXiALi[i].setAttribute('index',i);
            youXiALi[i].addEventListener('mouseenter',function(){
                // console.log(11);
                var index=this.getAttribute('index');
                // console.log(index);
                // 遍历图片的li节点
                youXiImgs.style.display='block';
                for(var i=0;i<youXiImgLi.length;i++){
                    //将所有li节点都隐藏，排他思想
                    youXiImgLi[i].style.display='none';
                }
                youXiImgLi[index].style.display='block';
            });
            //鼠标移出后隐藏起来
            youXiALi[i].addEventListener('mouseleave',function(){
                youXiImgs.style.display='none';
                for(var i=0;i<youXiImgLi.length;i++){
                    //将所有li节点都隐藏，排他思想
                    youXiImgLi[i].style.display='none';
                }
            });
        }

        // 漫画区域
        var manhuaALi=document.querySelector('.manhuaA').querySelector('.right').querySelectorAll('li');
        var ManHuaImg=document.querySelector('.ManHuaImg');
        var ManHuaImgLi=document.querySelector('.ManHuaImg').querySelectorAll('li');
        // console.log(manhuaALi);//7个li
        // console.log(ManHuaImgLi);//7个li
        
        for(var i=0;i<manhuaALi.length;i++){
            // 给节点添加自定义属性
            manhuaALi[i].setAttribute('index',i);
            manhuaALi[i].addEventListener('mouseenter',function(){
                // console.log(11);
                var index=this.getAttribute('index');
                // console.log(index);
                // 遍历图片的li节点
                ManHuaImg.style.display='block';
                for(var i=0;i<ManHuaImgLi.length;i++){
                    //将所有li节点都隐藏，排他思想
                    ManHuaImgLi[i].style.display='none';
                }
                ManHuaImgLi[index].style.display='block';
            });
            //鼠标移出后隐藏起来
            manhuaALi[i].addEventListener('mouseleave',function(){
                ManHuaImg.style.display='none';
                for(var i=0;i<ManHuaImgLi.length;i++){
                    //将所有li节点都隐藏，排他思想
                    ManHuaImgLi[i].style.display='none';
                }
            })
        }
        // 历史区tap区
        var liShi=document.querySelector('.lishi').querySelector('.lishiA').querySelector('.top').querySelectorAll('a');
        var middleOpp=document.querySelector('.lishi').querySelector('.lishiA').querySelector('.middle').querySelectorAll('p');
        var bottomTap=document.querySelector('.lishi').querySelector('.lishiA').querySelector('.bottom').querySelectorAll('ul');
        // console.log(bottomTap);
        for(var i=0;i<liShi.length;i++){
            liShi[i].setAttribute('index',i);
            liShi[i].addEventListener('click',function(){
                for(var i=0;i<liShi.length;i++){
                    liShi[i].className='';
                }
                this.className='bg';
                var index=this.getAttribute('index');
                //显示文字模块
                // console.log(index);
                for(var j=0;j<middleOpp.length;j++){
                    middleOpp[j].style.display='none';
                }
                middleOpp[index].style.display='block';
                // 显示图片模块
                for(var k=0;k<bottomTap.length;k++){
                    bottomTap[k].style.display='none';
                }
                bottomTap[index].style.display='block';
            });
        }
        //header区域
    (function(){
            var midLog=document.querySelector('.mid_logo').querySelectorAll('span');
            var midLogSection=document.querySelector('.mid_logo').querySelectorAll('section');
            // console.log(midLogSection);
            for(var logs=0;logs<midLog.length;logs++){
                // console.log( midLog[logs]);
                midLog[logs].setAttribute('newindex',logs);
                //鼠标移入
                midLog[logs].addEventListener('mouseenter',function(){
                    // console.log(11);
                var midLogIndex=this.getAttribute('newindex');
                //排他思想，遍历所有section，并且都设置为none
                    for(var logSection=0;logSection<midLogSection.length;logSection++){
                        midLogSection[logSection].style.display='none';
                    }
                    //留下自己，设置为block
                    midLogSection[midLogIndex].style.display='block';
                });
                // 鼠标移出
                midLog[logs].addEventListener('mouseleave',function(){
                    // console.log(11);
                var midLogIndex=this.getAttribute('newindex');
                //排他思想，遍历所有section，并且都设置为none
                    for(var logSection=0;logSection<midLogSection.length;logSection++){
                        midLogSection[logSection].style.display='none';
                    }
                    //留下自己，设置为block
                    midLogSection[midLogIndex].style.display='none';
                });
                midLogSection[logs].addEventListener('mouseenter',function(){
                    this.style.display='block';
                });
                midLogSection[logs].addEventListener('mouseleave',function(){
                    this.style.display='none';
                });
            }
    }());

    //轮播图区域
    (function(){
        var box=document.querySelector('.box');
        var left=document.querySelector('.lefts');
        var right=document.querySelector('.rights');
        var circle=document.querySelector('.circle');
        var buttonBoxLi=document.querySelector('.buttonBox').querySelector('ul');
        // console.log(buttonBoxLi);
        var boxWidth=box.offsetWidth;
        // console.log(boxWidth);//550
        box.addEventListener('mouseenter',function(){
            clearInterval(timer);
            timer=null;//清除定时器变量
        });
        box.addEventListener('mouseleave',function(){
            timer=setInterval(function(){
                //手动点击事件
                right.click();
            },4000);
        });
        var ul=box.querySelector('ul');
        // console.log(ul);
        var ol=document.querySelector('.circle');
        for(var i=0;i<ul.children.length;i++){
            var li=document.createElement('li');
            li.setAttribute('index',i);
            ol.appendChild(li);
            //小圆圈排他思想，我们可以在生成小圆圈的同时给小圆圈绑定点击事件
            li.addEventListener('click',function(){
                for(var i=0;i<ol.children.length;i++){
                    // console.log(btnUl.children[i]);
                    ol.children[i].className='';
                }
                for(var j=0;j<buttonBoxLi.children.length;j++){
                    buttonBoxLi.children[j].style.display='none';
                }
                this.className='current';
                var index=this.getAttribute('index');
                buttonBoxLi.children[index].style.display='block';
                num=index;
                // console.log(num);//3
                circle=index;
                // console.log(btnUl);//3
                animation(ul,-index * boxWidth);
            });
        }
        ol.children[0].classList='current';
        //点击左右按钮，移动图片
        // 克隆第一张图片放在ul后面
        var first=ul.children[0].cloneNode(true);
        ul.appendChild(first);
        var num=0;
        var circle=0;
        // 节流阀
        var flag=true;
        //右侧按钮
        right.addEventListener('click',function(){
                if(num==ul.children.length-1){
                    // ul.children.length-1=6
                    ul.style.left=0;
                    num=0;
                }
                num++;
                animation(ul,-num*boxWidth,function(){
                    flag=true;//打开节流阀
                });
                circle++;
                if(circle==ol.children.length){
                    // console.log(ol.children.length);7
                    circle=0;
                }
                for(var i=0;i<ol.children.length;i++){
                    //排他思想
                    ol.children[i].className='';
                }
                for(var j=0;j<buttonBoxLi.children.length;j++){
                    buttonBoxLi.children[j].style.display='none';
                }
                //留下自己
                ol.children[circle].className='current';
                buttonBoxLi.children[circle].style.display='block';
        });
        //左侧按钮
        left.addEventListener('click',function(){
            if(num==0){
                num=ul.children.length-1;
                ul.style.left=-num*boxWidth+'px';
            }
            num--;
            animation(ul,-num * boxWidth,function(){
                flag=true;
            });
            circle--;
            if(circle<0){
                circle=ol.children.length-1;
            }
            for(var i=0;i<ol.children.length;i++){
                //排他思想
                ol.children[i].className='';
            }
            for(var j=0;j<buttonBoxLi.children.length;j++){
                buttonBoxLi.children[j].style.display='none';
            }
            //留下自己
            ol.children[circle].className='current';
            buttonBoxLi.children[circle].style.display='block';
        });
        //自动轮播图
        var timer=setInterval(function(){
            //手动点击事件
            right.click();

        },3000);
    }());
    // 定义一个动画函数
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
    
    //出现双滚动条时，禁用父级滚动条
    (function(){
        var bodys=document.querySelector('body');
        var robot=document.querySelector('#robot');
        robot.addEventListener('mouseenter',function(){
            bodys.style.overflowX='hidden';
            bodys.style.overflowY='hidden';
        });
        robot.addEventListener('mouseleave',function(){
            bodys.style.overflowX='auto';
            bodys.style.overflowY='auto';
        });
    }());
    //右侧固定栏导航区
    (function(){
        var RightFixedNavigation=document.querySelector('.RightFixedNavigation');
        var robots=document.querySelector('#robot');
        var mains=document.querySelector('#mains');
        for(var i=0;i<RightFixedNavigation.children.length;i++){
            // console.log( RightFixedNavigation.children);
            RightFixedNavigation.children[4].addEventListener('mouseenter',function(){
                robots.style.display='block';
            });
            RightFixedNavigation.children[4].addEventListener('mouseleave',function(){
                robots.style.display='none';
            });
        };
        robots.addEventListener('mouseenter',function(){
            this.style.display='block';
        });
        robots.addEventListener('mouseleave',function(){
            this.style.display='none';
        });
    }());

    //右侧返回顶部按钮
    (function(){
        var BackTop=document.querySelector('#BackTop');
        var saiShiScroll=document.querySelector('#saishi');
        var dobx=document.querySelector('.dabox');
        // console.log(dobx.offsetHeight);
        document.addEventListener('scroll',function(){
            // console.log(window.pageYOffset);
            // console.log(dongManScroll.offsetTop);//804
            if(window.pageYOffset>(saiShiScroll.offsetTop-(dobx.offsetHeight+50))){
                BackTop.style.display='block';
            }else{
                BackTop.style.display='none';
            }
        });
        BackTop.addEventListener('click',function(){
            animations(window,0);
        });
    }());
    // 定义一个滚动条函数
    function animations(object,target,callback){
        // callback是一个回调函数，回调函数指将另外一个函数当作参数写入另外一个函数中
        //当我们不断点击按钮时，这个元素的速度会越来越快，因为开启了太多个定时器了
        // 每次启动一个定时器前先把上一个定时器清除
        clearInterval(object.timer);
        //使用对象的方法进行传参
        object.timer=setInterval(function(){
            //速度存放到一个变量里面
            // var step=Math.ceil((target-object.offsetLeft)/10);
            var step=(target-window.pageYOffset)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            if(window.pageYOffset==target){
                //停止定时器
                clearInterval(object.timer);
                //回调函数写在定时器结束之后
                if(callback){
                    callback();
                }
            }else{
                // object.style.left=window.pageYOffset+step+'px';
                window.scroll(0,window.pageYOffset+step);
            }
        },30);
    }

//右边移入移出导航栏
(function(){
    var mask=document.querySelector('.masks');
    var rightNavigenfather=document.querySelector('.rightNavigenfather');
    var fenqu=document.querySelector('#fenqu');
    // console.log(rightNavigenfather);
    fenqu.addEventListener('click',function(){
        mask.style.display='block';
        startMoverightNavigenfather(rightNavigenfather,{
            width:110,
        },function(){
        });
    });
    mask.addEventListener('click',function(){
        mask.style.display='none';
        startMoverightNavigenfather(rightNavigenfather,{
            width:0,
        },function(){
        });
    })
}());
// 定义一个动画函数
//node哪个节点，cssObj对象传入的是对象,complete回调函数
function startMoverightNavigenfather(node,cssObj,complete){
    clearInterval(node.timer);
    node.timer=setInterval(function(){
        var isEnd=true;//假设所有的动画都到达目的值
        for(var attr in cssObj){
            var iTarget=cssObj[attr];
            //计算速度
        var iCur=null;
        if(attr=="opacity"){
            iCur=parseInt(parseFloat(getStyle(node,"opacity"))*100); 
        }else{
            iCur=parseInt(getStyle(node,attr));
        }
        
        var speed=(iTarget-iCur)/8;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(attr=="opacity"){
                iCur+=speed;
                node.style.opacity=iCur/100;
                node.style.filter="alpha(opacity="+ iCur +")";
            }else{
                node.style[attr]=iCur+speed+"px";
            }

            if(iCur!=iTarget){
                isEnd=false;
            }
        }
        
        if(isEnd){
            clearInterval(node.timer);
            if(complete){
                complete.call(node);
            }
        }
    },30);
}
//浏览器兼容
function getStyle(node,cssStr){
    return node.currentStyle ? node.currentStyle[cssStr] : getComputedStyle(node)[cssStr];
}

//动画区tap区域
(function(){
    var dongHuaWeek=document.querySelector('#dongHuaWeek');
    var dongmanbodys=document.querySelector('.dongmans').querySelector('.left').querySelectorAll('.bodys');
    // console.log(dongmanbodys);
    for(var i=0;i<dongHuaWeek.children.length;i++ ){
        // console.log(dongHuaWeek.children);
        dongHuaWeek.children[i].setAttribute('index',i);
        dongHuaWeek.children[i].addEventListener('click',function(){
        var index=this.getAttribute('index');
            for(var j=0;j<dongHuaWeek.children.length;j++ ){
                dongHuaWeek.children[j].className='';
            }
            this.className='dongHuaWeekbg';
            for(var k=0;k<dongmanbodys.length;k++){
                dongmanbodys[k].style.display='none';
            }
            dongmanbodys[index].style.display='block';
        });
        
    }
}());
//动画区tap区域2
(function(){
    var dongHuaWeek=document.querySelector('.dongHuaWeek');
    var dongmanbodys=document.querySelector('.dongmanss').querySelector('.left').querySelectorAll('.bodys');
    // console.log(dongmanbodys);
    for(var i=0;i<dongHuaWeek.children.length;i++ ){
        // console.log(dongHuaWeek.children);
        dongHuaWeek.children[i].setAttribute('index',i);
        dongHuaWeek.children[i].addEventListener('click',function(){
        var index=this.getAttribute('index');
            for(var j=0;j<dongHuaWeek.children.length;j++ ){
                dongHuaWeek.children[j].className='';
            }
            this.className='dongHuaWeekbg';
            for(var k=0;k<dongmanbodys.length;k++){
                dongmanbodys[k].style.display='none';
            }
            dongmanbodys[index].style.display='block';
        });
        
    }
}());
// 头像登录区域3
(function(){
    var touxiangA=document.querySelector('#touxiangA');
    var touxiangB=document.querySelector('#touxiangB');
    var touxiangAA=document.querySelector('#touxiangAA');
    var tuiChuDengLu=document.querySelector('#tuiChuDengLu');
    tuiChuDengLu.addEventListener('click',function(){
        touxiangA.style.display='none';
        touxiangB.style.display='block';
        touxiangAA.style.display='none';
    });
}());
// var util = (function(){
//     var u = navigator.userAgent.toLowerCase();
//     return {
//     isIphone : function(){return (RegExp("iphone").test(u) || RegExp("ipod touch").test(u))},
//     isIpad : function(){return RegExp("ipad").test(u)},
//     isAndroid : function(){return (RegExp("android").test(u) || RegExp("android 2").test(u))},
//     isMB : function(){return (util.isIphone() || util.isIpad() || util.isAndroid())}
//     };
//     })();
//     window.util = util;
//     (function(){
//     if( !util.isMB() ){
//     window.location.href ='../m-bilibili/index.html';
//     }
//     })();

//音乐播放区
(function(){
    var flag=false;
    var music=document.querySelector(".musicFive");
    var audio=document.querySelector("#musicAudio");
    var musicIconfont=document.querySelector("#musicIconfont");
    music.addEventListener('click',function(){
        if(!flag){
            audio.play();
            musicIconfont.classList.remove("icon-play");
            musicIconfont.classList.add("icon-fabulous");
            flag=true;
        }else{
            audio.pause();
            flag=false;
            musicIconfont.classList.remove("icon-fabulous");
            musicIconfont.classList.add("icon-play");
        }
    });
}());

        // 收藏区tap栏
        var ShouCangLeft=document.querySelector('.shouCang').querySelector('.shouCangA').querySelector('.left').querySelector('ul').querySelectorAll('li');
        var ShouCangRight=document.querySelector('.shouCang').querySelector('.shouCangA').querySelector('.right').querySelectorAll('ul');
        // console.log(ShouCangRight);
        for(var s=0;ShouCangLeft.length;s++){
            ShouCangLeft[s].setAttribute('tapindex',s);
            ShouCangLeft[s].addEventListener('click',function(){
                var tapindex=this.getAttribute('tapindex');
                for(var j=0;j<ShouCangLeft.length;j++){
                    ShouCangLeft[j].style.backgroundColor='';
                }
                this.style.backgroundColor='#00AEEC';
                // 排他思想
                for(var i=0;i<ShouCangRight.length;i++){
                    ShouCangRight[i].style.display='none';
                }
                //点击时显示
                ShouCangRight[tapindex].style.display='block';
            });
        }
});
    