import "@babel/polyfill";

const nock = require('nock');



nock('https://academy.valentinog.com')
	.get('/api/link/')
	.reply(200, [
		{
			title: 'test',
			url: 'test'
		},
		{
			title: 'test2',
			url: 'test2'
		}
	]);