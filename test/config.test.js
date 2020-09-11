"use strict"

const { strictEqual  } = require('assert');
const { describe, it } = require('@popovmp/mocha-tiny');

const path = require("path");
const { configGet } = require("../index.js").init( path.join(__dirname, '/data') );

describe('config-json behavior', () => {

    it("Get a string", () => {
        strictEqual(configGet("key"), "value");
    });

    it("Get a number", () => {
        strictEqual(configGet("answer"), 42);
    });

    it("Get true", () => {
        strictEqual(configGet("yes"), true);
    });

    it("Get false", () => {
        strictEqual(configGet("no"), false);
    });

    it("Get null", () => {
        strictEqual(configGet("nil"), null);
    });

    it("Get a copy of an array", () => {
        configGet("arr")[0] = 54;
        strictEqual(configGet("arr")[0], 3);
    });

    it("Get a copy of an object", () => {
        configGet("obj")["a"] = 54;
        strictEqual(configGet("obj")["a"], 3);
    });

    it("Get a missing value", () => {
        strictEqual(configGet("foo"), undefined);
    });
});
