var login = new Vue({
	el:".user-login",
	data:{
		urls:{
			register:"/页面/pages/register.html"
		}
	},
	methods:{
		
	}
});

var register = new Vue({
	el:".user-register",
	data:{
		urls:{
			login:"/页面/pages/login.html"
		},
		text:{
			codeBtn:"获取验证码"
		},
		temp:{
			mailCode: false,
			mailCnt:0
		},
		formData : {
			userName:'',
			phone:'',
			email:'',
			code:'',
			password:''
		}
	},
	methods:{
		getMailCode:function(){
			// alert(1);
			// if(this.formData.email == ''){
			// 	return;
			// }
			
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
			nav.userInfo = 'a';
			
		}
	}
});

var profile = new Vue({
	el:".user-profile",
	data:{
		
	},
	methods:{
		
	}
});