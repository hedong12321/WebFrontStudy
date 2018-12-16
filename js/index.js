var app = new Vue({
	el : '#app',
	data : {
		books : [
			{name:'Java'},
			{name:'C#'},
			{name:'Python'}
		],
		message: 'Hello Vue.js!'
	},
	methods:{
		reverseMessage : function() {
			this.message = this.message.split('').reverse().join('');
		}
	}
});