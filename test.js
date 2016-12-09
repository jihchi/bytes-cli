import test from 'ava';
import execa from 'execa';

test('main - parse', async t => {
	const actual = await execa.stdout('./cli.js', ['1337']);

	t.is(actual, '1.31kB');
});

test('main - format', async t => {
	const actual = await execa.stdout('./cli.js', ['8mb']);

	t.is(actual, '8388608');
});

test('stdin - parse', async t => {
	const actual = await execa.stdout('./cli.js', {input: '1337'});

	t.is(actual, '1.31kB');
});

test('stdin - format', async t => {
	const actual = await execa.stdout('./cli.js', {input: '8mb'});

	t.is(actual, '8388608');
});
