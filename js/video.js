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
    
    // 简介区下拉模块
        (function(){
            var jianJieUl=document.querySelector('#jianJieUl');
            var jianJieBtn=document.querySelector('#jianJieBtn');
            var jianJieUlLi=jianJieUl.querySelectorAll('li');
            for(var i=0;i<jianJieUlLi.length;i++){
                var arr=jianJieUl.children[i];
                if(arr.length==0){
                    jianJieUl.style.height='0px';
                }else{
                    jianJieUl.style.height='70px';
                }
            }
            
            jianJieBtn.addEventListener('click',function(){
                if(jianJieUl.style.height=='70px'){
                    jianJieUl.style.height='170px';
                    this.innerText='返回';
                }else{
                    
                    jianJieUl.style.height='70px';
                    this.innerText='展开更多';
                }
            });
        }());
//评论区某块
(function(){
    var sendBtn=document.getElementById("sendBtn");
    var userName=document.getElementById("userName");
    var content=document.getElementById("content");
    sendBtn.onclick=function(){
        var oValue=userName.value;
        var oValues=content.value;
        if(oValue==null || oValue == ""){
            alert("用户名不能为空！");
            return;
        }
        if(oValues == null || oValues == ""){
            alert("留言板内容不能为空！");
            return;
        }

        var msgBoard=document.getElementById("msgBoard");
        //留言数据,创建一个li标签
        var Li=document.createElement("li");
        Li.innerHTML= "<h4>"+userName.value+"</h4><small>"+formatDate()+"</small><div>"+content.value+"</div>";
        //将留言内容追加到留言板中
        msgBoard.appendChild(Li);

        userName.value="";
        content.value=""; 
    }
    //格式化时间
    function formatDate(){
        //获取当前系统时间
        var date=new Date();
        //获取年月日时分秒
        var str=date.getFullYear()+"-"+ (parseInt(date.getMonth())+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        return str;
    }
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
        