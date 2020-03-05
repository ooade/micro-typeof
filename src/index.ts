const typeOf = (value: any): string =>
	Object.prototype.toString
		.call(value)
		.slice(8, -1)
		.toLowerCase();

export default typeOf;
