var login = new Vue({
	el:".user-login",
	data:{
		urls:{
			register:"/pages/register.html"
		},
		typeList:[
            {id:1,name:'学生'},
            {id:2,name:'正式老师'},
            {id:3,name:'大学生'},
            {id:4,name:'推广商'},
            {id:5,name:'机构'},
        ],
        selected: "",
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
	created(){
	        this.selected = this.typeList[0].id;
	    },
	methods:{
		 getTypeSelected(){
	            console.log(this.selected)
	        },
		check : function() {
		/*	this.alerts.showPassword = false;
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
			}*/

			/*var that = this;
			var formData = new FormData();
			formData.append('phone', this.info.phone);
			formData.append('password', this.info.password);
			axios.post("../user/login.action?type=phone&&selected="+this.selected,
					formData).then(function(res) {
				var data = res.data;
				if (data.code == "200") {
					alert(data.message);
					sessionStorage.setItem('userId', data.phone);
					sessionStorage.setItem('userNick', data.nickName);
					window.location.href = "../index1.html";
				} else {
					alert(data.message+"["+data.code+"]");
				}
			})*/
		}
	}
});

var register = new Vue({
	el:".user-register",
	content : " ",
	data:{
		urls:{
			login:"/pages/login.html"
		},
		text:{
			codeBtn:"获取验证码"
		},
		temp:{
			mailCode: false,
			mailCnt:0,
			alert1 :""
		},
		formData : {
				phone : {
					title : "电话号码",
					required : false,
					value : "",
					alert : "",
					txt :""
				},
				password : {
					title : "密码",
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
				passwordCfm : {
					title : "确认密码",
					required : true,
					value : "",
					alert : "",
					password:"" 
				},
				nickname : {
					title : "昵称",
					required : true,
					value : "",
					alert : "",
					txt:"" 
				},
				username : {
					title : "用户名",
					required : true,
					value : "",
					alert : "",
					txt:"" 
				}
				,
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
					alert : "",
					txt:""
				},
				email : {
					title : "邮箱 ",
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
					alert : "",
				},
				code : '',
				codealert:''
		}
	},
	methods:{
		getMailCode:function(){
			 if(this.formData.email.txt == ''){
			 	return;
			}
			var temp = this.temp;
			var text = this.text;
			var form = this.formData;
			
			temp.mailCnt = 120;
			text.codeBtn = '120s';
			form.code = '';
			
			if(temp.mailCode != false){
				clearInterval(temp.mailCode);
				temp.mailCode = false;
			}
			
			var that = this;
			temp.mailCode = setInterval(function(){
				temp.mailCnt--;
				text.codeBtn = temp.mailCnt + "s";
				if(temp.mailCnt == -1){
					clearInterval(temp.mailCode);
					temp.mailCode = false;
					text.codeBtn = "获取验证码";	
				}
			},1000);
			
			
		},shiftSex : function(val) {
			if (val == "男" || val == "女")
				this.formData.sex.value = val;
		},check : function() {
			var that = this;
			console.log(this.formData.email.txt);
			if(this.formData.email.txt==''){
				 layer.msg('邮箱为空，无法发送验证码');
				 return false;
			}
			axios.post("../user/email.action?target=" + this.formData.email.txt
							+ "&subject=" + "hzyc" + "&content="
							+ this.content).then(function(res) {
				var data = res.data;
				if (data.code == "200") {
					layer.msg(data.message);
				} else {
					layer.msg(data.message+"["+data.code+"]");
				}
			})
		}/*,
		checkusername: function(){
			if(this.formData.username.txt==""){
				this.formData.username.alert = "用户名不能为空";
				return false;
			}else{
				this.formData.username.alert = ""
			}
		},
		checknickname: function(){
			if(this.formData.nickname.txt==""){
				this.formData.nickname.alert = "昵称不能为空";
				return false;
			}else{
				this.formData.nickname.alert = ""
			}
		},
		checkphone: function(){
			if(this.formData.phone.txt==""){
				this.formData.phone.alert = "电话不能为空";
				return false;
			}else{
				this.formData.phone.alert = ""
			}
		},
		checkbirthday: function(){
			if(this.formData.birthday.value==""){
				this.formData.birthday.alert = "请选择出生日期";
				return false;
			}else{
				this.formData.birthday.alert = ""
			}
		},
		checkemail: function(){
			if(this.formData.email.txt==""){
				this.formData.email.alert = "邮箱不能为空";
				return false;
			}else{
				this.formData.email.alert = ""
			}
		},
		checkpassword: function(){
			if(this.formData.password.password==""){
				this.formData.password.alert = "密码不能为空";
				return false;
			}else{
				this.formData.password.alert = ""
			}
		},
		checkparentPassword: function(){
			if(this.formData.parentPassword.password==""){
				this.formData.parentPassword.alert = "家长密码不能为空";
				return false;
			}else{
				this.formData.parentPassword.alert = ""
			}
		},
		checkcode: function(){
			if(this.formData.code==""){
				this.formData.codealert = "验证码不能为空";
				return false;
			}else{
				this.formData.codealert = ""
			}
		},
		register :function(){
			if (this.formData.passwordCfm.password != this.formData.password.password) {
				this.formData.passwordCfm.alert = "两次密码不一致";
				return false;
			}
			var list=document.getElementsByTagName("input");
			for(var i=0;i<list.length && list[i];i++)
			 {
			       if(list[i].value=="")  
			       {
			    	   alert("有内容未填写！！！");
			    	   return false;
			       }
			 }
			var that = this;
			var formData = new FormData();
			console.log(this.formData.email.txt);
			console.log("昵称"+this.formData.nickname.txt);
			console.log("密码"+this.formData.password.password);
			formData.append('email', this.formData.email.txt);
			formData.append('phone', this.formData.phone.txt);
			formData.append('user_name', this.formData.username.txt);
			formData.append('sex', this.formData.sex.value);
			formData.append('birthday', this.formData.birthday.value);
			formData.append('p_password', this.formData.parentPassword.password);
			formData.append('nickname', this.formData.nickname.txt);
			formData.append('password', this.formData.password.password);
			console.log(this.formData.email.txt);
			console.log(this.formData.code);
			axios.post("../user/register.action?target="
					+this.formData.email.txt+"&mailCheck="+this.formData.code,
					formData).then(function(res) {
				var data = res.data;
				if (res.data.code == "200") {
					alert(data.message);
					window.location.href ="../pages/login.html";
				} else {
					alert(data.message+"["+data.code+"]");
				}
			})*/
		}
});

var profile = new Vue({
	el:".user-profile",
	data:{
		
	},
	methods:{
		
	}
});