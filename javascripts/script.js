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
        aLiNav[i].index =i;
        aLiNav[i].onmouseover = function(){
            move(oSlide,this.offsetLeft+oSlideL);
            for(var j=0; j<aLiNav.length; j++){
                aLiNav[j].style.color='#fff';
            }
            this.style.color='#befdff';
        };
        aLiNav[i].onmouseout = function(){
            move(oSlide,oSlideL);
            for(var j=0; j<aLiNav.length; j++){
                aLiNav[j].style.color='#fff';
            }
            aLiNav[0].style.color='#befdff';
        };
    }
    //头像旋转
    var oHead = document.querySelector('.nav .head');
    var oHeadS = document.querySelector('.nav .head span');
    oHead.style.WebkitTransform = 'rotate(360deg)';
    oHead.style.MozTransform = 'rotate(360deg)';
    oHead.style.mstransform = 'rotate(360deg)';
    oHead.style.transform = 'rotate(360deg)';
    oHead.onmouseover = function(){
        oHeadS.style.top = '65px';
    };
    oHead.onmouseout = function(){
        oHeadS.style.top = '95px';
    };
    //全屏
    var oShip = document.querySelector('.screen .screen-z .ship');
    var oShipImg = document.querySelector('.screen .screen-z .ship img');
    var oShip1 = document.querySelector('.screen .screen-z .ship .ship-1');
    oShip.style.margin = '220px auto';
    oShipImg.style.width = '0';
    oShipImg.style.height = '0';
    setTimeout(function(){
        oShip1.style.opacity='0';
        oShipImg.style.opacity = '0';
    },20000);
    oShip.onmouseenter = function(){
        oShip1.style.display= 'block';
        setTimeout(function(){
            oShip1.style.WebkitTransform = 'rotate(360deg)';
            oShip1.style.MozTransform = 'rotate(360deg)';
            oShip1.style.mstransform = 'rotate(360deg)';
            oShip1.style.transform = 'rotate(360deg)';
        },300);
    };
    oShip.onmouseleave = function(){
        oShip1.style.display= 'none';
    };
    var productA = document.querySelectorAll('.product .product-content ul li a');
    var productSpan = document.querySelectorAll('.product .product-content ul li span');
    var productAImg = document.querySelectorAll('.product .product-content ul li a img');
    for(var i=0; i<productA.length; i++){
        productA[i].index = i;
        productA[i].onmouseenter = function(){
            for(var j=0; j<productA.length; j++){
                productSpan[j].style.opacity = 0;
            }
            productSpan[this.index].style.opacity = 1;
        };
        productA[i].onmouseleave = function(){
            for(var j=0; j<productA.length; j++){
                productSpan[j].style.opacity = 0;
            }
        }
    }
    /*天气预报*/
    var oBtn=document.getElementById('btn');
    var oUl=document.getElementById('ul1');
    var oTxt=document.getElementById('txt');
    oBtn.onclick=function(){
        dataShow();
    };
    dataShow();
    function dataShow(){
        oUl.innerHTML='';
        jsonp({
            url:'http://api.k780.com:88/',
            data:{
                app:'weather.future',
                weaid:oTxt.value,
                appkey:10003,
                sign:'b59bc3ef6191eb9f747dd4e83c99f2a4'
            },
            cbName:'jsoncallback',
            success:function(json){
                var arr=json.result;
                for(var i=0; i<arr.length; i++){
                    var oLi=document.createElement('li');
                    oLi.innerHTML='<li><span>'+arr[i].citynm+'</span>' +
                    '<span>-'+arr[i].days+'</span>-'+arr[i].week+'</span>' +
                    '</span>-'+arr[i].temperature+'</span> ' +
                    '<img src="'+arr[i].weather_icon+'"/> ' +
                    '<img src="'+arr[i].weather_icon1+'"/> ' +
                    '</span>-'+arr[i].winp+'</span></li>';
                    oUl.appendChild(oLi);
                }

            }
        })
    }
});