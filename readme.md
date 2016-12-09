# bytes-cli [![Build Status](https://travis-ci.org/sindresorhus/bytes-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/bytes-cli)

> Convert bytes to a human readable string: `1337` → `1.31kB`

Useful for displaying file sizes for humans.


## Install

```
$ npm install --global bytes-cli
```


## Usage

```
$ bytes --help

  Usage
    $ bytes <number>
    $ echo <number> | bytes

  Example
    $ bytes 1337
    1.31kB
		
	Example
    $ bytes 1.31kB
    1341
```


## Related

- [bytes.js](https://github.com/visionmedia/bytes.js) - API for this module


## License

MIT © [Jih-Chi Lee](https://987.tw)
