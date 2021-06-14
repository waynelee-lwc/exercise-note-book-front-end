var bankEdit = new Vue({
	el:".bankEdit",
	data:{
		bankid:0 ,
		bankDetail:{
			name:'图论习题集',
			col:2,
			secCol:1,
			description:'题单简介测试文字' ,
			
		},
		bankCols:[
			{
				id:1,
				name:"英语"
			},
			{
				id:2,
				name:"语文"
			},
			{
				id:3,
				name:"数学"
			},
			{
				id:4,
				name:"计算机科学与技术"
			},
			{
				id:5,
				name:"生物化学"
			},
			{
				id:6,
				name:"材料物理"
			},
			
		],
		bankSecCols:[
			{
				id:0,
				name:"第一学年上"
			},
			{
				id:1,
				name:"第一学年下"
			},
			{
				id:2,
				name:"第二学年上"
			},
			{
				id:3,
				name:"第二学年下"
			},
			{
				id:4,
				name:"第三学年上"
			},
			{
				id:5,
				name:"第三学年下"
			},
		],
		subjectLabels:[
			{
				name:'第一章节',
				id:'1'
			},
			{
				name:'经常出错',
				id:'2'
			},
			{
				name:'偶尔出错',
				id:'3'
			},
			{
				name:'重点记忆',
				id:'4'
			},
			{
				name:'反复记忆',
				id:'5'
			},
			{
				name:'运动人体科学',
				id:'6'
			},
			{
				name:'传统文化',
				id:'7'
			}
		],
		subjects:[
					{
						type:'0',
						label:'6',
						title:'单选题，每题2分：在我国，将“修”与“辞”两字连起来使用的最早见于（）。',
						content:[
							{
								label:'A',
								content:'《周易》'
							},
							{
								label:'B',
								content:'《春秋》'
							},
							{
								label:'C',
								content:'《文心雕龙》'
							},
							{
								label:'D',
								content:'《庄子》'
							},
						],
						answer:'B',
						hint:'百度一下，你就知道~',
					},
					{
						type:'1',
						label:'4',
						title:'每块骨骼肌的主要结构都可以为：',
						content:[{
							label:'A',
							content:'肌腹'
						},	
						{
							label:'B',
							content:'肌腱'
						},	
						{
							label:'C',
							content:'筋膜'
						},	
						{
							label:'D',
							content:'腱鞘'
						},	
						],
						answer:["A","C"],
						hint:'百度一下，你就知道~',
					},
					{
						type:'2',
						label:'4',
						title:'中华人民共和国国土面积为：',
						content:"",
						answer:"960万平方公里",
						hint:'这个是常识哦~',
					},
					{
						type:'3',
						label:'4',
						title:'中国的GDP位于全球排名的第二',
						content:"",
						answer:"true",
						hint:'2019年中国的国民生产总值位于世界第二，第一是美国',
					},
					{
						type:'4',
						label:'4',
						title:'已知一块烧结普通砖的外观尺寸为240mm*115mm*53mm，其孔隙率为37%，干燥时质量为2487g，浸水饱和后质量为2984g',
						content:[{
							title:'试求该烧结普通砖的表观密度'
						},
						{
							title:'试求该烧结普通砖的绝对密度'
						},
						{
							title:'试求该烧结普通砖的质量吸水率'
						}
						],
						answer:["答：我不知道","答：可以百度","答：有手就行"],
						hint:'这个是常识~',
					},
		],
		layoutInfo:{
			subjectid:0,
			showAns:false,
			showHint:false
		},
		bankInfo:{
			
		},
		subjectType:[
			{
				name:'单选题',
				val:'xz',
				title:'题面',
				content:'选项',
				answer:'答案',
				hint:'提示',
				id:0
			},
			{
				name:'多选题',
				val:'dx',
				title:'题面',
				content:'选项',
				answer:'答案',
				hint:'提示',
				id:1
			},
			{
				name:'问答题',
				val:'wd',
				title:'题目',
				content:'选项',
				answer:'参考答案',
				hint:'提示',
				id:2
			},
			{
				name:'判断题',
				val:'pd',
				title:'题面',
				content:'选项',
				answer:'答案',
				hint:'提示',
				id:3
			},
			{
				name:'材料题',
				val:'cl',
				title:'材料',
				content:'题目',
				answer:'参考答案',
				hint:'提示',
				id:4
			}
		],
		layerId:'',
		subjectTypeId:0,
		newSubject:{
					title:'',
					content:[{
						label:'A',
						content:''
					},
					{
						label:'B',
						content:''
					},
					{
						label:'C',
						content:''
					},
					{
						label:'D',
						content:''
					}],
					type:'xz',
					answer:'A',
					hint:'',
					label:'0'
		},
		labelSelected:[],
		updateSubject:{
			
		},
		updateSubjectId:0,
		newLabel:{
			name:''
		}
	},
	methods:{
		print:function(data){
			alert(data);
		},
		layout:function(index){//题目详细信息
			this.layoutInfo = {
			subjectid:index,
			showAns:false,
			showHint:false
			}
			
			console.log(index);
			layui.use('layer', function(){
			  var layer = layui.layer;
			  
			  layer.open({
				  type:1,
				  content:$("#subject-layout"),
				  shade:0,
				  anim:3,
				  resize:false,
				  area:['700px','900px'],
				  title:'题目详情'
			  });
			});   
		},
		clickAns:function(){//点击题目答案区
			this.layoutInfo.showAns = !this.layoutInfo.showAns;
		},
		clickHint:function(){//点击题目提示区
			this.layoutInfo.showHint = !this.layoutInfo.showHint;
		},
		addSubject:function(){//添加题目弹窗
			
			this.initNewSubject();
			this.openCreateLayer();
		},
		initNewSubject:function(){//初始化创建题目，更改题目类型后触发
			console.log(this.currSubType.val);
			switch(this.currSubType.val){
				case 'xz':this.newSubject={
					title:'',
					content:[{
						label:'A',
						content:''
					},
					{
						label:'B',
						content:''
					},
					{
						label:'C',
						content:''
					},
					{
						label:'D',
						content:''
					}],
					type:'xz',
					answer:'A',
					hint:'',
					label:this.newSubject.label
				};break;
				case 'dx':this.newSubject={
					title:'',
					content:[{
						label:'A',
						content:''
					},
					{
						label:'B',
						content:''
					},
					{
						label:'C',
						content:''
					},
					{
						label:'D',
						content:''
					}],
					type:'dx',
					answer:[],
					hint:'',
					label:this.newSubject.label
				};break;
				case 'pd':this.newSubject={
					title:'',
					content:'',
					type:'pd',
					answer:'true',
					hint:'',
					label:this.newSubject.label
				};break;
				case 'wd':this.newSubject={
					title:'',
					content:'',
					type:'wd',
					answer:'',
					hint:'',
					label:this.newSubject.label
				};break;
				case 'cl':this.newSubject={
					title:'',
					content:[],
					type:'cl',
					answer:[],
					hint:'',
					label:this.newSubject.label
				};break;
			}
		},
		submitAddition:function(){//提交新建的题目
			if(!confirm("确认添加题目？"))
				return;
			
			var that = this;
			
			layui.use("layer",function(){//关闭当前窗口
				layui.layer.close(that.layerId);
			});
			
			var curr = this.newSubject;
			
			/*整理新建题目*/
			curr.type = this.currSubType.id;//整理题目类型
			this.subjects.push({
				title:curr.title,
				content:curr.content,
				hint:curr.hint,
				answer:curr.answer,
				type:curr.type,
				label:curr.label
			});
		},
		addQuestion:function(){//材料题添加题目
			var content = this.newSubject.content;
			var answer = this.newSubject.answer;
			var len = content.length;
			
			content.push({
				title:''
			});
			answer.push('');
		},
		delQuestion:function(index){//材料题删除内容
			
			var content = this.newSubject.content;
			var answer = this.newSubject.answer;
			if(!confirm('确认删除这道题吗？\n' + content[index].title)){
				return;
			}
			content.splice(index,1);
			answer.splice(index,1);
		},
		modifySubject:function(index){//修改题目信息
			this.updateSubject = this.subjects[index];
			this.updateSubjectId = index;
			layui.use('form',function(){
				layui.form.render();
			});
			this.openUpdateLayer();
		},
		deleteSubject:function(index){//删除题目信息
			if(!confirm("确认删除此题？\n" + this.subjects[index].title)){
				return;
			}
			
			this.subjects.splice(index,1);
			console.log(this.subjects);
		},
		getTypeById:function(id){//根据id计算类型对象
			for(var idx in this.subjectType){
				if(this.subjectType[idx].id == id){
					return this.subjectType[idx];
				}
			}
			return {
				name:'null'
			}
		},
		getLabelById:function(id){//根据id计算标签名称
			for(var idx in this.subjectLabels){
				if(this.subjectLabels[idx].id == id)
					return this.subjectLabels[idx];
			}
			return {
				name:'null'
			}
		},
		openCreateLayer:function(){//打开创建题目页面
			//题目弹窗显示
			var that = this;
			layui.use('layer', function(){
			  var layer = layui.layer;
			  
			  that.layerId = layer.open({
				  type:1,
				  content:$("#new-subject-layout"),
				  anim:3,
				  resize:false,
				  area:['700px','900px'],
				  title:'创建题目',
			  });
			}); 
		},
		openUpdateLayer:function(){//打开修改题目界面
			//题目弹窗显示
			var that = this;
			layui.use('layer', function(){
			  var layer = layui.layer;
			  
			  that.layerId = layer.open({
				  type:1,
				  content:$("#upd-subject-layout"),
				  anim:3,
				  resize:false,
				  area:['700px','900px'],
				  title:'修改题目',
			  });
			}); 
		},
		getParam:function(key){//获取url中的参数
			var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r!=null)return  decodeURI(r[2]); return '';
		},
		submitUpdate:function(){//提交更新题目
			//更新题目信息
			this.subjects[this.updateSubjectId] = this.updateSubject
			var that = this;
			layui.use("layer",function(){//关闭当前窗口
				layui.layer.close(that.layerId);
			});
		},
		addLabel:function(){//添加一个标签
			console.log(this.newLabel.name);
			if(this.newLabel.name != ''){
				this.subjectLabels.push({
					name:this.newLabel.name,
					id:'15'
				});
				
				layui.use('form',function(){
					layui.form.render();
				})
			}
			this.newLabel.name = '';
		}
	},
	computed:{
		currSubType:function(){//获取当前题目类型对象
			return this.subjectType[this.subjectTypeId];
		},
		subjectSelected:function(){//获取当前选中题目
			return this.subjects[this.layoutInfo.subjectid];
		},
	},
	created:function(){//页面信息初始化
		layui.use('form',function(){
			layui.form.render();
		});
		
		this.bankDetail = {
			name:this.getParam('name'),
			col:this.getParam('col'),
			secCol:this.getParam('secCol'),
			description:'题单描述测试数据'
		};
	}
})



layui.use('form', function(){//表单控件回调接口
	var form = layui.form;

	//多选题答案更新
	form.on('checkbox(dx-ans)',function(data){
	 var answer = bankEdit.newSubject.answer;
	 // console.log(data);
	 if(answer.indexOf(data.value) != -1){
		 answer.splice(answer.indexOf(data.value),1);
	 }else{
		 answer.push(data.value);
	 }
	});
	
	//单选题答案更新
	form.on('radio(xz-ans)',function(data){
	  bankEdit.newSubject.answer = data.value;
	});

	//题目标签选择更新
	form.on('select(new-col)',function(data){
		console.log(data);
		bankEdit.newSubject.label = data.value;
	});

	//题目类型选择更新
	form.on('select(new-type)',function(data){
	  console.log('题目类型改变，当前类型为：' + bankEdit.currSubType.name);
	  bankEdit.subjectTypeId = data.value;
	  bankEdit.initNewSubject();
	});
	
	// //标签列表多选更新
	// form.on('checkbox(search-label)',function(data){
	// 	var list = bankEdit.searchLabel;
	// 	var index = list.indexOf(data.value);
	// 	if(index != -1){
	// 		list.splice(index,1);
	// 	}else{
	// 		list.push(data.value);
	// 	}
	// });
	
  
});