
import type { PageServerLoad } from './$types';

import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, parent }) => {

    // console.log(params);
    const parentData = await parent()
    console.log(parentData);
    
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug
        }
    })

    if (!post) {
        throw error(404, 'Post not found')
    }
    
    return { post }
}