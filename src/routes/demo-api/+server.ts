export function GET() {
	console.log('log from GET /demo-api');
	return new Response('Hello from the server!');
}
