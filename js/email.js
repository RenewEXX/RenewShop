function E() {


email.onchange = function(){
		var email = this.value;
		var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
		if(reg.test(email)){
			alert("邮箱格式正确");
		}else{
			alert("邮箱格式不正确");
		}
	}
	
}
	