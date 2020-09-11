'use strict';

const { strictEqual  } = require('assert');
const { describe, it } = require('@popovmp/mocha-tiny');

const { init, get, configGet } = require("../index.js");

describe('config-json API', () => {

    describe('init(path)', () => {
        it('is a function', () => {
            strictEqual(typeof init, 'function');
        });

        it('accepts 1 argument', () => {
            strictEqual(init.length, 1);
        });
    });

    describe('get(key)', () => {
        it('is a function', () => {
            strictEqual(typeof get, 'function');
        });

        it('accepts 1 argument', () => {
            strictEqual(get.length, 1);
        });
    });

    describe('configGet(key)', () => {
        it('is a function', () => {
            strictEqual(typeof configGet, 'function');
        });

        it('accepts 1 argument', () => {
            strictEqual(configGet.length, 1);
        });
    });
});
