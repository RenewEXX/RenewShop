function aa() {


 	var oFile = document.getElementById("flie")
 	var oView = document.getElementById("view")
 	var obj = {} //创建对象
 	oFile.addEventListener("change", function() { //监听
 		var fs = this.files[0]
 		var reader = new FileReader() //接口
 		reader.onload = function() { //onload 事件会在页面或图像加载完成后立即发生
 			oView.style.display = "block" //块状
 			if (!obj[this.result]) {
 				var oImg = document.createElement("img") ////通过指定名称创建一个元素
 				var oDiv = document.createElement("div")
 				oDiv.className = "item"
 				oImg.src = this.result
 				oDiv.appendChild(oImg) //向节点添加最后一个子节点
 				oView.appendChild(oDiv)
 				obj[this.result] = this.result

 			} else {
 				alert('不可以重复上传')
 			}
 		}


 		reader.onprogress = function() { //onprogress 事件在浏览器下载指定的视频/音频（audio/video）时触发
 			console.log("正在读取")
 		}

 		reader.readAsDataURL(fs) //地址

 	})


 }
