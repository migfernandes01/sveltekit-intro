import { json, type RequestEvent } from '@sveltejs/kit';
import { comments } from '$lib/comments';

export function GET() {
	return json(comments);
}

export async function POST(requestEvent: RequestEvent) {
	const { request } = requestEvent;
	const { text } = await request.json();
	const newComment = {
		id: comments.length + 1,
		text
	};
	comments.push(newComment);
	return json(newComment, { status: 201 });
}
