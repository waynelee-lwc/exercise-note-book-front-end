var nav = new Vue({
	el : ".nav",
	data : {
		navList:[
			{
				title:"题单广场",
				href:"http://www.baidu.com"
			},
			{
				title:"创建题单",
				href:""
			},
			{
				title:"直播中心",
				href:""
			},
			{
				title:"应用中心",
				href:""
			}
		],
		urls:{
			logo:"/resource/logo.png",
			login:"/pages/login.html",
			index:"/index.html",
			register:"/pages/register.html"	
		},
		userInfo:null,
	},
	methods:{
		setUserInfo:function(userInfo){
			this.userInfo = userInfo;
		}
	},
	created:function(){
		// this.userInfo = sessionStorage.getItem("user");
		// console.log(this.userInfo.username);
		// console.log(window.location.href.split('?bankid=')[1]);
	}
})