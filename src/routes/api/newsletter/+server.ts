// api/newsletter GET

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	const options: ResponseInit = {
		status: 418,
		headers: {
			banana: 'testing'
		}
	};
	return new Response('Hello', options);
};

// api/newsletter POST
export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();

	const email = data.get('email');

    console.log(email);
    

	const body: BodyInit = JSON.stringify({
		success: true,
		message: 'ok'
	});
	const options: ResponseInit = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	// subs the user to newsletter
	return new Response(body, options);
};
