import { comments } from '$lib/comments';
import { json, type RequestEvent } from '@sveltejs/kit';

export function GET(requestEvent: RequestEvent) {
	const { params } = requestEvent;
	const { commentId } = params;

	const comment = comments.find((comment) => comment.id === parseInt(commentId ?? '1'));

	return json(comment);
}

export async function PATCH(requestEvent: RequestEvent) {
	const { params, request } = requestEvent;
	const { commentId } = params;
	const { text } = await request.json();

	const comment = comments.find((comment) => comment.id === parseInt(commentId ?? '1'));
	comment!.text = text;

	return json(comment);
}

export async function DELETE(requestEvent: RequestEvent) {
	const { params } = requestEvent;
	const { commentId } = params;

	const commentToDelete = comments.find((comment) => comment.id === parseInt(commentId ?? '1'));
	const index = comments.findIndex((comment) => comment.id === parseInt(commentId ?? '1'));

	comments.splice(index, 1);
	return json(commentToDelete);
}
