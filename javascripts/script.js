'use strict';
$(function(){
    //鼠标移入微信
    $('.nav_top i').bind('mouseover',function(){
        $('.nav_top i .code').css({top:0});
    });
    //鼠标移出微信
    $('.nav_top i').bind('mouseout',function(){
        $('.nav_top i .code').css({top:-100});
    });
});