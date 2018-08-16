"use strict"


var currentBackground = 0;

var color = ["rgba(19, 19, 19,0.7)", "rgba(20, 28, 36,0.7)", "rgba(41, 41, 41,0.7)", "rgba(59, 59, 59,0.7)", "rgba(64, 64, 64,0.7)", "rgba(35, 31, 29,0.7)", "rgba(2, 255, 255,0.7)", "rgba(20, 20, 58,0.7)", "rgba(54, 62, 227,0.7)", "rgba(230, 33, 23,0.7)", "rgba(52, 52, 52,0.7)", "rgba(150, 136, 112,0.7)", "rgba(61, 61, 61,0.7)", "rgba(41, 98, 255,0.7)"];

var folders = ["Residente", "Boat", "TableTop","Garderobe", "Planet"];

var layer = ["layer1", "layer2", "layer3"];

var layerCopy = ["layerCopy1", "layerCopy2", "layerCopy3"];

var bAngle = 0;
var bl = $("#WhatsUpBlock");
$(bl).css('backround-color', 'rgba(230, 33, 23,0.7);');

function ChangeColor(number)
{
    $('#WhatsUpBlock').css({'background-color': color[number]});
}




function DownSlide()
{
    
    $("#layerCopy1").css('background-image', "url(img/"+ folders[currentBackground + 1] +"/layer1.png)").show(0);
    $("#layerCopy2").css('background-image', "url(img/"+ folders[currentBackground + 1] +"/layer2.png)").show(0);
    $("#layerCopy3").css('background-image', "url(img/"+ folders[currentBackground + 1]+ "/layer3.png)").show(0);
    
    $("#layer1").css('background-image', "url(img/"+ folders[currentBackground] +"/layer1.png)").slideUp(500);
    $("#layer2").css('background-image', "url(img/"+ folders[currentBackground] +"/layer2.png)").slideUp(500);
    $("#layer3").css('background-image', "url(img/"+ folders[currentBackground]+ "/layer3.png)").slideUp(500);
    
   
    
    setTimeout(function() {
         
        
                  $("#layer1").css('background-image', "url(img/"+ folders[currentBackground] +"/layer1.png)").slideDown(0);
    $("#layer2").css('background-image', "url(img/"+ folders[currentBackground] +"/layer2.png)").slideDown(0);
    $("#layer3").css('background-image', "url(img/"+ folders[currentBackground]+ "/layer3.png)").slideDown(0);
               }, 500);
  
 
    currentBackground++;
    if(currentBackground == 5)
    {
        currentBackground = 0;
    }
}


function UpSlide()
{
     if(currentBackground == -1)
    {
        currentBackground = 4;
    }

      $("#layerCopy1").css('background-image', "url(img/"+ folders[currentBackground - 1] +"/layer1.png)").show(0);
    $("#layerCopy2").css('background-image', "url(img/"+ folders[currentBackground - 1] +"/layer2.png)").show(0);
    $("#layerCopy3").css('background-image', "url(img/"+ folders[currentBackground - 1]+ "/layer3.png)").show(0);
   

    
    
      
            $("#layer1").css('background-image', "url(img/"+ folders[currentBackground] +"/layer1.png)").slideDown(500);
    $("#layer2").css('background-image', "url(img/"+ folders[currentBackground] +"/layer2.png)").slideDown(500);
    $("#layer3").css('background-image', "url(img/"+ folders[currentBackground]+ "/layer3.png)").slideDown(500);
              
              
    

    setTimeout(function() {
         $("#layer1").css('background-image', "url(img/"+ folders[currentBackground] +"/layer1.png)").hide(0);
    $("#layer2").css('background-image', "url(img/"+ folders[currentBackground] +"/layer2.png)").hide(0);
    $("#layer3").css('background-image', "url(img/"+ folders[currentBackground]+ "/layer3.png)").hide(0);
    
     }, 500);
   
      
  
    currentBackground--;
    if(currentBackground == -1)
    {
        currentBackground = 4;
    }
}



$("#ButtonUp").click(
    function()
{
    UpSlide();
});


$("#ButtonDown").click(
    function()
{
    DownSlide();
});


document.body.onmousemove=function (e)
{
    var d = e || window.event;
    var doc = document.documentElement;
    var body = document.body;
    var mouse_x = d.pageX;
    var mouse_y = d.pageY;
    parallaxX(mouse_x, layer);
    parallaxY(mouse_y, layer);
    parallaxX(mouse_x, layerCopy);
    parallaxY(mouse_y, layerCopy);
}


function parallaxX(mouse_x, layer)
{
    var body = document.body;
    var shift1, elem;
    var sh_1 = -5;
    var sh_2 = -10;
    var sh_3 = -15;
    var sh_4 = -20;

    elem=document.getElementById(layer[0]);
    shift1 = mouse_x*10/body.clientWidth;

    shift1=sh_1*mouse_x/body.clientWidth;

    elem.style.left=shift1+'px';

    elem = document.getElementById(layer[1]);
    shift1 = mouse_x*10/body.clientWidth;

    shift1=sh_2*mouse_x/body.clientWidth;

    elem.style.left=shift1 + 'px';


    elem = document.getElementById(layer[2]);
    shift1 = mouse_x*10/body.clientWidth;

    shift1=sh_3*mouse_x/body.clientWidth;

    elem.style.left=shift1 + 'px';
}

function parallaxY(mouse_y, layer)
{
    var body = document.body;
    var shift1, elem;
    var sh_1 = -10;
    var sh_2 = -20;
    var sh_3 = -30;
    var sh_4 = -40;

    elem=document.getElementById(layer[0]);

    shift1 = mouse_y*20/body.clientHeight;

    shift1=sh_1*mouse_y/body.clientHeight;

    elem.style.top=shift1+'px';


    elem = document.getElementById(layer[1]);
    shift1 = mouse_y*20/body.clientHeight;

    shift1=sh_2*mouse_y/body.clientHeight;

    elem.style.top=shift1 + 'px';


    elem = document.getElementById(layer[2]);
    shift1 = mouse_y*20/body.clientHeight;

    shift1=sh_3*mouse_y/body.clientHeight;

    elem.style.top=shift1 + 'px';
}

$("#WhatsUpBlock").hover(
    function () {
        if (bAngle === 0) {
            var rotate_dot = setInterval((function () {
                $("#ButtonWhatsUp").css({ transform: "rotate(" + bAngle + "deg)" });
                bAngle += 20;
                if (bAngle > 180) {
                    bAngle = 0;
                    clearInterval(rotate_dot);
                }
            }), 50);
        }
    }
);

var Upperline = $("#MenuButtonLineOne");
var Middleline = $("#MenuButtonLineTwo");
var Bottomline = $("#MenuButtonLineThree");

$("#MenuButton").hover(
    function () {
        
        $(Upperline).animate({ "margin-bottom": "5px" }, "200");
        $(Bottomline).animate({ "margin-top": "3px" }, "200" );

        setTimeout((function () {
            $(Upperline).animate({ "margin-bottom": "5px" }, "200");
        }), 1000);
        setTimeout((function () {
            $(Bottomline).animate({ "margin-top": "1px" }, "200");
        }), 1000);
            
    }
);
