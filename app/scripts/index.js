



// 第二步 定义组件
// 首页组件
var Home = Vue.extend({
	template: '<h1>Home</h1>'

})
// 列表页组件
var List = Vue.extend({
	template: '<h1>List</h1>'
}) 
// 详情页组件
var Detail = Vue.extend({
	template: '<h1>Detail</h1>'
})


// 第三步 注册组件
Vue.component('home',Home);
Vue.component('list',List);
Vue.component('detail',Detail);




// 实例化Vue

var app = new Vue({
	// 定义容器元素
	el:'#MeiTuanStart',
	// 绑定数据
	data:{
		view: 'home'
	}
})