<!-- ❤ 音纹  ❤-->	


/*
	function $(obj) {
		return document.getElementById(obj);
	}
	window.onload = function() {
		rain();
		music();

	}
*/

function music() {




	var oAudio = document.getElementById('myaudio');
	/*	
		window.onclick = function() {
			if (oAudio.paused) {
				oAudio.play();

			} else {
				oAudio.pause();
				

			}

		}
		
		
	*/
	// 创建音频上下文对象
	var oCtx = new AudioContext();
	// console.log(oCtx);
	// 创建媒体源,除了audio本身可以获取，也可以通过oCtx对象提供的api进行媒体源操作
	var audioSrc = oCtx.createMediaElementSource(oAudio);
	// 创建分析机 
	var analyser = oCtx.createAnalyser();
	// 媒体源与分析机连接
	audioSrc.connect(analyser);
	// 输出的目标：将分析机分析出来的处理结果与目标点（耳机/扬声器）连接
	analyser.connect(oCtx.destination);

	// 效果（实现的具体方法）
	// 绘制音频图的条数(fftSize)
	/*
	  根据分析音频的数据去获取音频频次界定音频图的高度
	  放在与音频频次等长的8位无符号字节数组
	  Uint8Array:初始化默认值为1024
	*/
	// 利用canvas渐变进行音频绘制
	var ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var oW = canvas.width;
	var oH = canvas.height;
	var color1 = ctx.createLinearGradient(oW / 2, oH / 2 - 30, oW / 2, oH / 2 - 100);
	var color2 = ctx.createLinearGradient(oW / 2, oH / 2 + 30, oW / 2, oH / 2 + 100);
	color1.addColorStop(0, '#000');
	color1.addColorStop(.5, '#069');
	color1.addColorStop(1, '#f6f');
	color2.addColorStop(0, '#000');
	color2.addColorStop(.5, '#069');
	color2.addColorStop(1, '#f6f');
	// 音频图的条数
	var count = 150;
	// 缓冲区:进行数据的缓冲处理，转换成二进制数据
	var voiceHeight = new Uint8Array(analyser.frequencyBinCount);
	// console.log(voiceHeight);

	function draw() {
		// 将当前的频率数据复制到传入的无符号字节数组中，做到实时连接
		analyser.getByteFrequencyData(voiceHeight);
		// console.log(voiceHeight);
		// 自定义获取数组里边数据的频步
		var step = Math.round(voiceHeight.length / count);
		ctx.clearRect(0, 0, oW, oH);
		for (var i = 0; i < count; i++) {
			var audioHeight = voiceHeight[step * i];
			ctx.fillStyle = color1; // 绘制向上的线条
			ctx.fillRect(oW / 2 + (i * 10), oH / 2, 7, -audioHeight);
			ctx.fillRect(oW / 2 - (i * 10), oH / 2, 7, -audioHeight);
			ctx.fillStyle = color2; // 绘制向下的线条
			ctx.fillRect(oW / 2 + (i * 10), oH / 2, 7, audioHeight);
			ctx.fillRect(oW / 2 - (i * 10), oH / 2, 7, audioHeight);
		}
		window.requestAnimationFrame(draw);
	}
	draw();


	/*
	  analyserNode 提供了时时频率以及时间域的分析信息
	      允许你获取实时的数据，并进行音频可视化
	      analyserNode接口的fftSize属性
	          fftSize:无符号长整型值，用于确定频域的FFT(快速傅里叶变换)
	          ffiSize属性值是从32位到32768范围内的2的非零幂,默认值是2048
	*/
}










<!-- ❤ 代码雨  ❤-->

function rain() {
	var canva = document.getElementById('canvas');
	var ctx = canva.getContext('2d');



	canva.height = window.innerHeight;
	canva.width = window.innerWidth;
	// 代码雨的文字
	var texts = '任万新'.split('');

	var fontSize = 16;
	var columns = canva.width / fontSize;
	// 用于计算输出文字时坐标，所以长度即为列数
	var drops = [];
	//初始值
	for (var x = 0; x < columns; x++) {
		drops[x] = 1;
	}


	function down() {
		//让背景逐渐由透明到不透明
		ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
		ctx.fillRect(0, 0, canva.width, canva.height);
		//文字颜色
		ctx.fillStyle = '#0F0';
		ctx.font = fontSize + 'px arial';
		//逐行输出文字
		for (var i = 0; i < drops.length; i++) {
			var text = texts[Math.floor(Math.random() * texts.length)];
			ctx.fillText(text, i * fontSize, drops[i] * fontSize);

			if (drops[i] * fontSize > canva.height || Math.random() > 0.95) {
				drops[i] = 0;
			}

			drops[i]++;
		}
	}
	setInterval(down, 33);

}
