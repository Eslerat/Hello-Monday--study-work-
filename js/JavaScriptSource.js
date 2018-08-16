// JavaScript source code
"use strict"

var width = $(document).width();
var height = $(document).height();
var lines = $(".line");
var r_lines = $(".r_line");
var l_lines = $(".l_line");
var backgrounds = $(".background");
var block = $(".block_text");
var current_background = 0;
var current_textBlock = 0;
var container = $(".container");
var color = ["rgba(39, 14, 58,0.9);", "rgba(19, 19, 19,0.9);", "rgba(20, 28, 36,0.9);", "rgba(41, 41, 41,0.9);", "rgba(59, 59, 59,0.9);", "rgba(64, 64, 64,0.9);", "rgba(35, 31, 29,0.9);", "rgba(2, 255, 255,0.9);", "rgba(20, 20, 58,0.9);", "rgba(54, 62, 227,0.9);", "rgba(230, 33, 23,0.9);", "rgba(52, 52, 52,0.9);", "rgba(150, 136, 112,0.9);", "rgba(61, 61, 61,0.9);", "rgba(41, 98, 255,0.9);"];

var bgRepeat = 0;

var c_SM = 0;
hideAll();
$(block[current_background]).show();
setInterval(DownSlide, 20000);


function hideAll() {
    for (var i = 0; i < block.length; i++)
    {
         $(block[i]).hide();
    }
}

function showAll() {
    for (var i = 0; i < backgrounds.length; i++)
    {
         $(backgrounds[i]).show();
    }
}

function hideAllBackground()
{
    for(var i = 0; i < backgrounds.length; i++)
    {
        $(backgrounds[i]).hide();
    }
}

function changeColor(number) {
    $(container).css({ "background-color": color[number] });
}
function DownSlide() {
    
      if(current_textBlock === 14)
    {
        
        current_textBlock = 0;
        hideAll();
     
    }
 if (current_background === 14) 
    {
        
        current_background = 0;
        showAll();
    }
   
    $(backgrounds[current_background]).slideUp(1000);
    $(block[current_textBlock]).hide();
  
    current_textBlock++;
    current_background++;
  
   
   
    $(block[current_textBlock]).show(500);
    changeColor(current_textBlock);
}
function UpSlide() {

    if (current_background === 0) 
    {
        hideAllBackground();
        current_background = 15;
    }
     if (current_textBlock === 0) 
    {
        hideAll();
        current_textBlock = 15;
    }
 
   
    $(backgrounds[current_background - 1]).slideDown(1000);
    $(block[current_textBlock]).hide();
    
    current_background--;
    current_textBlock--;
 
    $(block[current_textBlock]).show(500);
    changeColor(current_textBlock);
}

$("#Down").click(
    function () {
        DownSlide();

    }
);
$("#Up").click(
    function () {
        UpSlide();
    }
);




$("main").css({
    "width": width,
    "height": height
});

$(".menuButton").hover(
    function () {
        $(lines[0]).animate({ "margin-bottom": "3px" }, "200");
        $(lines[1]).animate({ "margin-bottom": "3px" }, "200" );

        setTimeout((function () {
            $(lines[0]).animate({ "margin-bottom": "1px" }, "200");
        }), 1000);
        setTimeout((function () {
            $(lines[1]).animate({ "margin-bottom": "1px" }, "200");
        }), 1000);
            
    }
);

$(".cont_2").hover(
    function () {
        if (c_SM === 0) {
            var rotate_dot = setInterval((function () {
                $(".seeMore").css({ transform: "rotate(" + c_SM + "deg)" });
                c_SM += 20;
                if (c_SM > 180) {
                    c_SM = 0;
                    clearInterval(rotate_dot);
                }
            }), 50);
        }
    }
);


$(".upButton").hover(
    function () {
        var d = 45;
        var rotate_arr = setInterval((function () {
            $(r_lines[0]).css({ transform: "rotate(" + d + "deg)" });
            $(l_lines[0]).css({ transform: "rotate(-" + d + "deg)" });
            d-=7;
            if (d < 22) {
                d = 22;
                clearInterval(rotate_arr);
            }
        }), 100);
    },
    function () {
        $(r_lines[0]).css({ transform: "rotate(45deg)" });
        $(l_lines[0]).css({ transform: "rotate(-45deg)" });
    }
);

$(".downButton").hover(
    function () {
        var d = 45;
        var rotate_arr_2 = setInterval((function () {
            $(r_lines[1]).css({ transform: "rotate(-" + d + "deg)" });
            $(l_lines[1]).css({ transform: "rotate(" + d + "deg)" });
            d -= 7;
            if (d < 22) {
                d = 22;
                clearInterval(rotate_arr_2);
            }
        }), 100);
    },
    function () {
        $(r_lines[1]).css({ transform: "rotate(-45deg)" });
        $(l_lines[1]).css({ transform: "rotate(45deg)" });
    }
);


$(".menuButton").click(
    function () {
        $(lines[0]).animate({ "margin-bottom": "9px" }, "200");
        $(lines[1]).animate({ "margin-bottom": "9px" }, "200");
        var d = 0;

        var rotate_line = setInterval((function () {
            $(lines[1]).css({ transform: "rotate(" + d + "deg)" });
            d += 36;
            if (d > 360)
            {
                d = 0;
                clearInterval(rotate_line);
            }
        }), 75);

        setTimeout((function () {
            $(lines[0]).animate({ "margin-bottom": "1px" }, "200");
        }), 1000);
        setTimeout((function () {
            $(lines[1]).animate({ "margin-bottom": "1px" }, "200");
        }), 1000);

    }
);


$(".upButton").click(
    function () {
        var d = 45;
        var rotate_arr = setInterval((function () {
            $(r_lines[0]).css({ transform: "rotate(" + d + "deg)" });
            $(l_lines[0]).css({ transform: "rotate(-" + d + "deg)" });
            d += 20;
            if (d > 225) {
                d = 225;
                clearInterval(rotate_arr);
            }
        }), 50);
    }
);

$(".downButton").click(
    function () {
        var d = 45;
        var rotate_arr = setInterval((function () {
            $(r_lines[1]).css({ transform: "rotate(-" + d + "deg)" });
            $(l_lines[1]).css({ transform: "rotate(" + d + "deg)" });
            d += 20;
            if (d > 225) {
                d = 225;
                clearInterval(rotate_arr);
            }
        }), 50);
    }
);


var stepX = [0.02, 0.05, 0.09, 0.14, 0.2];
var stepY = [0.01, 0.025, 0.045, 0.07, 0.1];
var x = width / 2;
var y = height / 2;
function move(current_x, current_y) {
    var shift_x = current_x - x;
    var shift_y = current_y - y;

    var f = $('.parallax');
    for (var i = 0, shift = 0 ; i < f.length; i++)
    {
        if (i % 5 !== 0) {
            f[i].style.left = shift_x * stepX[shift] + "px";
            f[i].style.top = shift_y * stepY[shift] + "px";
            shift++;
        }
        else
        {
            shift = 0;
        }
       
    }
}