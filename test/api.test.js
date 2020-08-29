'use strict';

const { strictEqual  } = require('assert');
const { describe, it } = require('@popovmp/mocha-tiny');

const path   = require("path");
const config = require("../index.js");
config.init( path.join(__dirname, '/data') );

describe('config-json API', () => {

    describe('init(path)', () => {
        it('is a function', () => {
            strictEqual(typeof config.init, 'function');
        });

        it('accepts 1 argument', () => {
            strictEqual(config.init.length, 1);
        });
    });

    describe('get(key)', () => {
        it('is a function', () => {
            strictEqual(typeof config.get, 'function');
        });

        it('accepts 1 argument', () => {
            strictEqual(config.get.length, 1);
        });
    });
});
