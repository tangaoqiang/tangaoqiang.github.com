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
});