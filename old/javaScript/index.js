window.onload = function() {
	// alert(sessionStorage.getItem('userId'));
	if (sessionStorage.getItem('userId') != null) {
		console.log('欢迎用户：' + sessionStorage.getItem('userNick'));
	}
}

var nav = new Vue({
	el : '.sb-Nav',
	data : {
		navList : {
			btn1 : '学科',
			btn2 : '自习',
			btn3 : '自定义',
			btn4 : '注册',
			btn5 : '登录',
		},
		subjects : [ {
			name : '英语'
		}, {
			name : '汉语'
		}, {
			name : '生活常识'
		} ],
		searchKey : ''
	},
	methods : {
		showLogin : function() {
			bg.init();
			login.init();
		},
		showRegister : function() {
			bg.init();
			register.init();
		}

	}
})

var bg = new Vue({
	el : '#bg',
	data : {
		show : false
	},
	methods : {
		init : function() {
			this.show = true;
		},
		close : function() {
			this.show = false;
		}
	}
})

var login = new Vue({
	el : "#login",
	data : {
		show : false,
		info : {
			phone : "",
			password : "",
		},
		alerts : {
			phone : "账户不存在",
			password : "账号或密码错误",
			showPhone : false,
			showPassword : false
		},
		title : {
			phone : "手机号",
			password : "密码"
		}
	},
	methods : {
		init : function() {
			this.show = true;
			this.clearAlert();
			this.clearContent();
		},
		close : function() {
			this.show = false;
			bg.close();
		},
		check : function() {
			this.alerts.showPassword = false;
			this.alerts.showPhone = false;
			if (this.info.phone == "") {
				this.alerts.phone = "请输入电话号码";
				this.alerts.showPhone = true;
				return;
			}

			if (this.info.password == "") {
				this.alerts.password = "请输入密码";
				this.alerts.showPassword = true;
				return;
			}

			var that = this;
			var formData = new FormData();
			formData.append('phone', this.info.phone);
			formData.append('password', this.info.password);
			axios.post("http://localhost/user/login.action?type=phone",
					formData).then(function(res) {
				var data = res.data;
				if (res.data.code == "0") {
					alert(data.message + "登录成功");
					sessionStorage.setItem('userId', data.phone);
					sessionStorage.setItem('userNick', data.nickName);
					location.reload();
				} else {
					alert(data.message);
				}
			})
		},
		clearAlert : function() {
			this.alerts.showPassword = false;
			this.alerts.showPhone = false;
		},
		clearContent : function() {
			this.info.phone = "";
			this.info.password = "";
		},
		checkPhone : function() {
			var phone = this.info.phone;
			var that = this;
			axios.get("http://localhost/user/checkUser.action?phone=" + phone)
					.then(function(res) {
						console.log(res.data);
						if (res.data == "N") {
							that.alerts.phone = "该用户不存在！！！";
							that.alerts.showPhone = true;
						} else {
							that.alerts.showPhone = false;
						}
					})
		}
	}
})

var register = new Vue({
	el : "#register",
	data : {
		subject : "yzm",
		content : " ",
		show : false,
		form : {
			phone : {
				title : "电话号码",
				required : false,
				value : "",
				alert : "",
				txt:"" 
			},
			password : {
				title : "密码",
				required : true,
				value : "",
				alert : "",
				password:"" 
			},
			passwordCfm : {
				title : "确认密码",
				required : true,
				value : "",
				alert : "",
				password:"" 
			},
			parentPassword : {
				title : "家长密码",
				required : true,
				value : "",
				alert : "",
				password:"" 
			},
			username:{
				title : "姓名",
				required : true,
				value : "",
				alert : "",
				txt:"" 
			},
			nickname : {
				title : "昵称",
				required : true,
				value : "",
				alert : "",
				txt:"" 
			},
			school : {
				title : "学校",
				required : false,
				value : "",
				alert : ""
			},
			grade : {
				title : "年级",
				required : false,
				value : "",
				alert : ""
			},
			whatsApp : {
				title : "WhatsApp",
				required : false,
				value : "",
				alert : ""
			},
			wechat : {
				title : "微信",
				required : false,
				value : "",
				alert : ""
			},
			email : {
				title : "邮箱",
				required : true,
				value : "",
				alert : "",
				txt :"" 
			},
			sex : {
				title : "性别",
				required : true,
				value : "男",
				alert : ""
			},
			birthday : {
				title : "生日",
				required : true,
				value : "",
				alert : ""
			},
			mailCheck : {
				title : "邮箱验证码",
				txt :"" ,
				required : true,
				value : "",
				alert : "",
				btnFont : "验证码",
				sec : 60,
				interval : -1
			}
		}
	},
	methods : {
		init : function() {
			this.show = true;
		},
		close : function() {
			this.show = false;
			bg.close();
		},
		shiftSex : function(val) {
			if (val == "男" || val == "女")
				this.form.sex.value = val;
		},
		setCount : function() {
			var mail = this.form.mailCheck;
			if (mail.interval != -1) {
				clearInterval(mail.interval);
			}

			mail.sec = 60;
			mail.btnFont = mail.sec + "S";
			mail.interval = setInterval(function() {
				if (mail.sec == 0) {
					clearInterval(mail.interval);
					mail.interval = -1;
					mail.btnFont = "验证码";
					return;
				}
				mail.sec--;
				mail.btnFont = mail.sec + "S";
			}, 1000);
		},
		check : function() {
			var that = this;
			console.log(this.form.email);
			console.log(this.form.email.txt);
			console.log(this.subject);
			
			axios.post("http://localhost/user/email.action?target=" + this.form.email.txt
							+ "&subject=" + this.subject + "&content="
							+ this.content).then(function(res) {
				var data = res.data;
				if (res.data.code == "0") {
					alert("发送成功");
				} else if(res.data.code == "1"){
					alert("发送失败，邮箱错误");
				}else if(res.data.code == "2"){
					alert("发送失败，邮箱已注册");
				}
				// var data = res.data.message;
				// this.form.mailCheck.value=res.data.mailCheck;
			})
		}/*,
		emailcheck:function(){
			var test=true;
			axios.post("http://localhost/user/checkmailCheck.action?target="
					+this.form.email.txt+"&mailCheck="+this.form.mailCheck.txt).then(function(res) {
					var data = res.data;
					console.log(data);
					if(data=="验证码错误！！！"){
						alert(data);
						test= false;
					}
			})
			console.log("test:"+test);
			return test;
		}*/,
		register :function(){
			if (this.form.passwordCfm.password != this.form.password.password) {
				this.form.passwordCfm.alert = "两次密码不一致";
				return false;
			}
//			emailcheck();
			axios.post("http://localhost/user/checkmailCheck.action?target="
					+this.form.email.txt+"&mailCheck="+this.form.mailCheck.txt).then(function(res) {
					var data = res.data;
					console.log(data);
					if(data=="验证码错误！！！"){
						alert(data);
						test= false;
					}
			})
			var that = this;
			var formData = new FormData();
			console.log(this.form.email.txt);
			console.log("昵称"+this.form.nickname.txt);
			console.log("密码"+this.form.password.password);
			formData.append('email', this.form.email.txt);
			formData.append('phone', this.form.phone.txt);
			formData.append('user_name', this.form.username.txt);
			formData.append('sex', this.form.sex.value);
			formData.append('birthday', this.form.birthday.value);
			formData.append('p_password', this.form.parentPassword.password);
			formData.append('nickname', this.form.nickname.txt);
			formData.append('password', this.form.password.password);
			axios.post("http://localhost/user/register.action",
					formData).then(function(res) {
				var data = res.data;
				if (res.data.code == "0") {
					alert("注册成功");
					location.reload();
				} else {
					alert(data.message);
				}
			})
		}
		
	}
})