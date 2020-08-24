"use strict"

const assert = require("assert");
const {init, test, ensure} = require("@popovmp/micro-tester");

const config = require("../index.js");
config.init(__dirname);

init("Test config-json");

test("Have an `init` function", () => {
    assert.strictEqual(typeof config.init, "function");
});

test("Have a `get` function", () => {
    assert.strictEqual(typeof config.get, "function");
});

test("Get a string", () => {
    assert.strictEqual(config.get("key"), "value");
});

test("Get a number", () => {
    assert.strictEqual(config.get("answer"), 42);
});

test("Get true", () => {
    assert.strictEqual(config.get("yes"), true);
});

test("Get false", () => {
    assert.strictEqual(config.get("no"), false);
});

test("Get null", () => {
    assert.strictEqual(config.get("nil"), null);
});

test("Get a copy of an array", () => {
    config.get("arr")[0] = 54;
    assert.strictEqual(config.get("arr")[0], 3);
});

test("Get a copy of an object", () => {
    config.get("obj")["a"] = 54;
    assert.strictEqual(config.get("obj")["a"], 3);
});

test("Get a missing value", () => {
    // It prints an error to the console and returns undefined.
    assert.strictEqual(config.get("foo"), undefined);
});

ensure();
