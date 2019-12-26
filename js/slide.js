$(document).ready(function () {
	initRadius();
});

var number = 1;  //设置为全局变量

//轮播图图片主体
function startSlide() {
	dealRadius(number);
	if(number == 4) {
		number = 0;
		$('#slide_img').css({left: '0px'});  //处理无缝衔接图
		 dealRadius(0); // 处理无缝衔接小圆点的跳转
	}
	number++;
	var imageLeft = -1000 * number;
	$('#slide_img').animate({left: imageLeft});
}	
var timer = setInterval(startSlide,3000);



//小圆点的轮播实现
function dealRadius(num) {
	var lis = $('#num li');
	lis.eq(num).css('background-color', 'red');
	for(var i = 0; i < num; i++) {
		lis.eq(i).css('background-color','white');
	}
	for(var i = num + 1; i < 4; i++) {
		lis.eq(i).css('background-color','white');
	}
}

//初始化小圆点
function initRadius() {
	var lis = $('#num li');
	lis.eq(0).css('background-color', 'red');
}


//左右按钮的实现
$('#left').mousedown (function() {
	clearInterval(timer);
	if(number == 0) {
		$('#slide_img').css({left: '-4000px'}); 
		number = 4;
	}
	var imageLeft = -1000 * (number-1);
	$('#slide_img').animate({left: imageLeft});
	number--;
	if(number == 0) {
		dealRadius(3);
	} else {
			dealRadius(number-1);
	}
});
$('#left').mouseup(function() {
	timer = setInterval(startSlide,3000);
});

$('#right').mousedown (function() {
	clearInterval(timer);
	if(number == 4) {
		number = 0;
		$('#slide_img').css({left: '0px'});  //处理无缝衔接图
	}
	var imageLeft = -1000 * (number+1);
	$('#slide_img').animate({left: imageLeft});
	dealRadius(number);
	number++;

});
$('#right').mouseup(function() {
	timer = setInterval(startSlide,3000);
});


//小圆点的点击实现
$('#num').on('click','li',function(){
	clearInterval(timer);
	var _number = $(this).index() + 1;
	number = _number
	dealRadius(number-1);
	var imageLeft = -1000 * number;
	$('#slide_img').animate({left: imageLeft});
	timer = setInterval(startSlide,3000);
});
