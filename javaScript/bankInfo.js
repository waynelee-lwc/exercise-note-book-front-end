var bankInfo = new Vue({
	el:".bankInfo",
	data:{
		bankid:0 ,
		bankDetail:{
			name:'测试题单1',
			createTime:'2020-12-12 07:07:38',
			user:{
				nickname:'wayne-lee',
				icon:'../resource/icon.jpg',
				bankCnt:500,
				id:'10086'
			},
			collection:'计算机科学与技术',
			description:'这是一个测试题单，这是他的默认描述，希望你喜欢',
			questionCount:28,
		},
		subjectLabels:[
			{
				name:'巩固',
				id:'',
				selected:false
			},
			{
				name:'比较难',
				id:'',
				selected:true
			},
			{
				name:'训练',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			},
			{
				name:'测试',
				id:'',
				selected:false
			}
		],
		subjects:[
			{
				type:'传统文化',
				label:'难题',
				title:'单选题，每题2分：在我国，将“修”与“辞”两字连起来使用的最早见于（）。',
				content:'A 《周易》    B《春秋》    C《文心雕龙》    D《庄子》',
				answer:'B《春秋》',
				hint:'百度一下，你就知道~',
				showAns:false,
				showHint:false
			},
			{
				type:'运动人体科学',
				label:'考试题',
				title:'每块骨骼肌的主要结构都可以为：',
				content:'A.肌腹    B.肌腱    C.筋膜    D.腱鞘',
				answer:'B《春秋》',
				hint:'百度一下，你就知道~',
				showAns:false,
				showHint:false
			},
			{
				type:'运动人体科学',
				label:'考试题',
				title:'水的作用：',
				content:'A.细胞和体液主要组成部分    B.参与人体新陈代谢    C.调节体温    D.缓冲作用',
				answer:'B《春秋》',
				hint:'百度一下，你就知道~',
				showAns:false,
				showHint:false
			},
			{
				type:'传统文化',
				label:'难题',
				title:'单选题，每题2分：在我国，将“修”与“辞”两字连起来使用的最早见于（）。',
				content:'A 《周易》    B《春秋》    C《文心雕龙》    D《庄子》',
				answer:'B《春秋》',
				hint:'百度一下，你就知道~',
				showAns:false,
				showHint:false
			},
			{
				type:'传统文化',
				label:'难题',
				title:'单选题，每题2分：在我国，将“修”与“辞”两字连起来使用的最早见于（）。',
				content:'A 《周易》    B《春秋》    C《文心雕龙》    D《庄子》',
				answer:'B《春秋》',
				hint:'百度一下，你就知道~',
				showAns:false,
				showHint:false
			}
		],
		layoutInfo:{
			subjectid:2
		}
	},
	methods:{
		print:function(data){
			alert(data);
		},
		layout:function(index){
			this.layoutInfo.subjectid = index;
			this.subjects[this.layoutInfo.subjectid].showAns = false;
			this.subjects[this.layoutInfo.subjectid].showHint = false;
			
			console.log(index);
			layui.use('layer', function(){
			  var layer = layui.layer;
			  
			  layer.open({
				  type:1,
				  content:$("#subject-layout"),
				  shade:0,
				  anim:3,
				  resize:false,
				  area:['800px','500px'],
				  title:'题目详情'
			  });
			});   
		},
		clickAns:function(){
			this.subjects[this.layoutInfo.subjectid].showAns = !this.subjects[this.layoutInfo.subjectid].showAns;
		},
		clickHint:function(){
			this.subjects[this.layoutInfo.subjectid].showHint = !this.subjects[this.layoutInfo.subjectid].showHint;
		}
	},
	created:function(){
		var href = window.location.href;
		var para = href.split('?')[1];
		if(para == null || para.split('bankid=')[1] == null){
			window.location.href = '../index.html';
			return;
		}
		this.bankid = para.split('bankid=')[1];
		console.log(this.bankid);
		layui.use('layer', function(){
		  var layer = layui.layer;
		  
		  layer.open({
			  type:1,
			  content:$("#subject-layout"),
			  shade:0,
			  anim:3,
			  resize:false,
			  area:['800px','500px'],
			  title:'题目详情'
		  });
		});   
	}
})





// layui.use('table', function(){
//   var table = layui.table;
  
//   //第一个实例
//   table.render({
//     elem: '#demo'
//     ,height: 1000
//     ,url: 'http://localhost/user/tableData.action' //数据接口
//     ,page: true //开启分页
//     ,cols: [[ //表头
//       {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
//       ,{field: 'username', title: '用户名', width:80}
//       ,{field: 'sex', title: '性别', width:80, sort: true}
//       ,{field: 'city', title: '城市', width:80} 
//       ,{field: 'sign', title: '签名', width: 177}
//       ,{field: 'experience', title: '积分', width: 80, sort: true}
//       ,{field: 'score', title: '评分', width: 80, sort: true}
//       ,{field: 'classify', title: '职业', width: 80}
//       ,{field: 'wealth', title: '财富', width: 135, sort: true}
//     ]],
// 	limit: 10
//   });
  
// });

layui.use('laypage', function(){
  var laypage = layui.laypage;
  
  //执行一个laypage实例
  laypage.render({
    elem: 'subject-info-page-bar' //注意，这里的 test1 是 ID，不用加 # 号
    ,count: 45 ,//数据总数，从服务端得到
	limit:5,
	groups:3,
	jump: function(obj, first){
	    //obj包含了当前分页的所有参数，比如：
	    console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
	    console.log(obj.limit); //得到每页显示的条数
	    
	    //首次不执行
	    if(!first){
	      //do something
	    }
	  },
	theme: 'page-bar',
	prev:'<',
	next:'>',
	layout: ['count', 'prev', 'page', 'next'],
  });
});

layui.use('form', function(){
  var form = layui.form;
  
  //各种基于事件的操作，下面会有进一步介绍
  
});
