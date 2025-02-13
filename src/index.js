import html from './index.html';

export default {
	async fetch(request, env, ctx) {
		return new Response(html, {
			status: 200,
			headers: {
				'Content-Type': 'text/html; charset=UTF-8',
			},
		});
	},
};
