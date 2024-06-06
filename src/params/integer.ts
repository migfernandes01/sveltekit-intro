// match will be used by sveltekit to check if the parameter is valid
export function match(param: string) {
	return /^\d+$/.test(param);
}
