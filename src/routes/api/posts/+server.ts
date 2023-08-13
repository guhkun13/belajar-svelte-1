import { json, type RequestHandler } from '@sveltejs/kit';

import prisma from '$lib/prisma';
import type { Prisma } from '@prisma/client';

export const GET: RequestHandler = async ({ url }) => {
	const limit = Number(url.searchParams.get('limit') ?? 10);
	const order = url.searchParams.get('order') || 'asc';

	let options: Prisma.PostFindManyArgs = {
		take: limit
	};
	options = setOrderBy(options, order);

	const posts = await prisma.post.findMany(options);

	return json(posts);
};

function setOrderBy(options: Prisma.PostFindManyArgs, order: string) {
	if (order == 'asc') {
		options.orderBy = {
			createdAt: 'asc'
		};
	} else {
		options.orderBy = {
			createdAt: 'desc'
		};
	}
	return options;
}
