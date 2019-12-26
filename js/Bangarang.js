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

	var oCtx = new AudioContext();

	var audioSrc = oCtx.createMediaElementSource(oAudio);

	var analyser = oCtx.createAnalyser();

	audioSrc.connect(analyser);

	analyser.connect(oCtx.destination);

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

	var count = 150;
	
	var voiceHeight = new Uint8Array(analyser.frequencyBinCount);


	function draw() {
	
		analyser.getByteFrequencyData(voiceHeight);

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
	
	var texts = 'Bangarang!'.split('');

	var fontSize = 16;
	var columns = canva.width / fontSize;
	
	var drops = [];
	
	for (var x = 0; x < columns; x++) {
		drops[x] = 1;
	}


	function down() {
		
		ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
		ctx.fillRect(0, 0, canva.width, canva.height);
	
		ctx.fillStyle = '#B70505';
		ctx.font = fontSize + 'px arial';

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
