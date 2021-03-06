var aside = new Vue({
	el:".aside",
	data:{
		aside:{
			collections:[
				{
					name:'英语习题集',
					banks:[
						{
							name:'英语题单1',
							url:'1',
						},
						{
							name:'英语题单2',
							url:'2',
						},
						{
							name:'英语题单3',
							url:'3',
						},
						{
							name:'英语题单4',
							url:'4',
						},
						{
							name:'英语题单5',
							url:'5',
						},
					]
				},
				{
					name:'数学习题集',
					banks:[
						{
							name:'数学题单1',
							url:'1',
						},
						{
							name:'数学题单2',
							url:'2',
						},
						{
							name:'数学题单3',
							url:'3',
						},
						{
							name:'数学题单4',
							url:'4',
						},
						{
							name:'数学题单5',
							url:'5',
						},
					]
				},
				{
					name:'语文习题集',
					banks:[
						{
							name:'语文题单1',
							url:'1',
						},
						{
							name:'语文题单2',
							url:'2',
						},
						{
							name:'语文题单3',
							url:'3',
						},
						{
							name:'语文题单4',
							url:'4',
						},
						{
							name:'语文题单5',
							url:'5',
						},
					]
				}
			],
			subfield:[
				{
					name:'英语',
					title:'英语',
					secLabel:[
						{
							name:'小学二年级题单',
							banks:[
								{
									name:'第一单元，职业',
									url:'',
								},
								{
									name:'第二单元，动物',
									url:'',
								}
							]
						}
					]
				},
				{
					name:'语文',
					title:'语文',
					secLabel:[
						{
							name:'小学三年级',
							banks:[
								{
									name:'第二单元，古诗文',
									url:'',
								},
								{
									name:'第一单元，文言文',
									url:'',
								}
							]
						},
						{
							name:'小学六年级',
							banks:[
								{
									name:'第六单元，勿忘国耻',
									url:'',
								},
								{
									name:'第五单元，爱国精神',
									url:'',
								}
							]
						},
					]
				},
				{
					name:'数学',
					title:'数学',
					secLabel:[
						{
							name:'小学四年级',
							banks:[
								{
									name:'第二单元，解析结合',
									url:'',
								},
								{
									name:'第一单元，代数几何',
									url:'',
								}
							]
						}
					]
				},
			],
			follow:[
				{
					nickname:'lee',
					url:''
				},
				{
					nickname:'张三',
					url:''
				},
				{
					nickname:'李四',
					url:''
				},
				{
					nickname:'唐马儒',
					url:''
				},
			]
		},
	},
	methods:{
		
	}
})