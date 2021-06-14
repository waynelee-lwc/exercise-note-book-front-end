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
			logo:"/页面/resource/logo.png",
			login:"/页面/pages/login.html",
			index:"/页面/index.html",
			register:"/页面/pages/register.html"
		},
		userInfo:null
	},
	methods:{
		setUserInfo:function(userInfo){
			this.userInfo = userInfo;
		}
	}
})