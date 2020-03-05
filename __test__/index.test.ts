import test from 'tape';

import typeOf from '../src';

test('returns correct type for strings', t => {
	t.equal(typeOf('Ademola'), 'string');
	t.end();
});

test('returns correct type for numbers', t => {
	t.equal(typeOf(23), 'number');
	t.end();
});

test('returns correct type for arrays', t => {
	t.equal(typeOf([0, 1]), 'array');
	t.end();
});

test('returns correct type for objects', t => {
	t.equal(typeOf({ name: 'Ademola' }), 'object');
	t.end();
});

test('returns correct type for symbols', t => {
	t.equal(typeOf(Symbol('foo')), 'symbol');
	t.end();
});

test('returns correct type for functions', t => {
	t.equal(
		typeOf(() => {}),
		'function'
	);
	t.end();
});
