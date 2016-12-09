#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('get-stdin');
const bytes = require('bytes');
const isFinite = require('is-finite');

const cli = meow(`
	Usage
	  $ bytes <number>
	  $ echo <number> | bytes

	Example
	  $ bytes 1337
	  1.34 kB
`);

function getInput(input = '') {
	const finite = Number(input);

	if (isFinite(finite)) {
		return {method: 'format', value: finite};
	}

	return {method: 'parse', value: String.prototype.trim.call(input)};
}

const input = getInput(cli.input[0]);

function init(args) {
	const {value, method} = args;

	if (method === 'format') {
		console.log(bytes.format(value));
		return;
	}

	console.log(bytes.parse(value));
}

if (!input.value && process.stdin.isTTY) {
	console.error('Specify a number or a string');
	process.exit(1);
}

if (input.value) {
	init(input);
} else {
	getStdin().then(getInput).then(init);
}
