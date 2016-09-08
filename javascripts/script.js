'use strict';
$(function(){
    //鼠标移入微信
    $('.nav_top .codeBox').bind('mouseover',function() {
        $('.nav_top .codeBox .code').stop().animate({
            "top": 36
        });
    });
    //鼠标移出微信
    $('.nav_top .codeBox').bind('mouseout',function() {
        $('.nav_top .codeBox .code').stop().animate({
            "top": -100
        });
    });
    //导航条开始
    var aLiNav = document.querySelectorAll('.nav .nav_right li');
    var oSlide = document.querySelector('.slide');
    var oSlideL = oSlide.offsetLeft;
    for(var i = 0;i<aLiNav.length;i++){
        aLiNav[i].onmouseover = function(){
            move(oSlide,this.offsetLeft+oSlideL);
            for(var j=0; j<aLiNav.length; j++){
                aLiNav[j].style.color='#333';
            }
            this.style.color='#fff';
        };
        aLiNav[i].onmouseout = function(){
            move(oSlide,oSlideL);
            for(var j=0; j<aLiNav.length; j++){
                aLiNav[j].style.color='#333';
            }
            aLiNav[0].style.color='#fff';
        };
    }
    //广告图效果
    var oFocus = document.querySelector('.focus');
    var oFocusL = document.querySelector('.focus .l');
    var oFocusR = document.querySelector('.focus .r');
    //批量创建span
    var C = 7;
    var R = 4;
    for(var i=0; i<R; i++){
        for(var j=0; j<C; j++){
            var oS = document.createElement('span');
            oS.style.width = oFocus.offsetWidth/C+'px';
            oS.style.height = oFocus.offsetHeight/R+'px';
            oS.innerHTML = '<em class="front"></em><em class="back"></em>';
            oFocus.appendChild(oS);
            var oFront = oS.children[0];
            var oBack = oS.children[1];
            oS.style.left = j*oS.offsetWidth+'px';
            oS.style.top = i*oS.offsetHeight+'px';
            oFront.style.backgroundPosition = oBack.style.backgroundPosition = -j*oS.offsetWidth+'px -'+i*oS.offsetHeight+'px';
            oS.c = j;
            oS.r = i;
        }
    }
    var iNow = 0;
    var bOk = false;
    var aS = oFocus.getElementsByTagName('span');
    var aF = document.querySelectorAll('.focus span .front');
    var aB = document.querySelectorAll('.focus span .back');
    //点击oFocus
    oFocus.onclick = function(){
        if(bOk)return;
        bOk = true;
        iNow++;
        for(var i=0;i<aS.length;i++){
            ;(function(index){
                setTimeout(function(){
                    aS[index].style.WebkitTransition = '1s all ease';
                    aS[index].style.WebkitTransform = 'perspective(800px) rotateY(180deg)';
                },(aS[i].c+aS[i].r)*100);
            })(i);
        }
        function tranEnd(){
            aS[aS.length-1].removeEventListener('transitionend',tranEnd,false);
            for(var i=0;i<aS.length;i++){
                aS[i].style.WebkitTransition = 'none';
                aS[i].style.WebkitTransform = 'perspective(800px) rotateY(0deg)';
                aF[i].style.backgroundImage = 'url(img/'+(iNow%3+1)+'.jpg)';
                aB[i].style.backgroundImage = 'url(img/'+((iNow+1)%3+1)+'.jpg)';

            }
            bOk = false;
        }
        aS[aS.length-1].addEventListener('transitionend',tranEnd,false);
    };
});