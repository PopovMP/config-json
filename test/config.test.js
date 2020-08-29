"use strict"

const { strictEqual  } = require('assert');
const { describe, it } = require('@popovmp/mocha-tiny');

const path   = require("path");
const config = require("../index.js").init( path.join(__dirname, '/data') );

describe('config-json behavior', () => {

    it("Get a string", () => {
        strictEqual(config.get("key"), "value");
    });

    it("Get a number", () => {
        strictEqual(config.get("answer"), 42);
    });

    it("Get true", () => {
        strictEqual(config.get("yes"), true);
    });

    it("Get false", () => {
        strictEqual(config.get("no"), false);
    });

    it("Get null", () => {
        strictEqual(config.get("nil"), null);
    });

    it("Get a copy of an array", () => {
        config.get("arr")[0] = 54;
        strictEqual(config.get("arr")[0], 3);
    });

    it("Get a copy of an object", () => {
        config.get("obj")["a"] = 54;
        strictEqual(config.get("obj")["a"], 3);
    });

    it("Get a missing value", () => {
        // It prints an error to the console and returns undefined.
        strictEqual(config.get("foo"), undefined);
    });
});
