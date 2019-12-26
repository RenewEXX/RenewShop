function U() {


	user.onblur = function() {
		var user = this.value;
		var reg = /\s|^$/;
		if (reg.test(user)) {
			alert("用户名不能为空");
		} else {

		}
	}

	password.onblur = function() {
		var password = this.value;
		var reg = /\s|^$/;
		if (reg.test(password)) {
			alert("密码不能为空");
		} else {

		}
	}
}