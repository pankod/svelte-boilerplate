import "@babel/polyfill";
import dotenv from 'dotenv';
import nock from 'nock';
import { cleanup } from '@testing-library/svelte'

dotenv.config({path: './.test.env'});

beforeEach(cleanup)

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

nock('https://academy.valentinog.com')
	.get('/api/200')
	.reply(200, { success: true });

nock('https://academy.valentinog.com')
	.get('/api/404')
	.reply(404, { success: false });
