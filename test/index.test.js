"use strict"

const {init, test, done} = require("./micro-tester");

const config = require("../index.js");
config.init(__dirname);

init("Test config-json");

test("Have an `init` function", () =>
    typeof config.init === "function"
);

test("Have a `get` function", () =>
    typeof config.get === "function"
);

test("Get a string", () =>
    config.get("key") === "value"
);

test("Get a number", () =>
    config.get("answer") === 42
);

test("Get true", () =>
    config.get("yes") === true
);

test("Get false", () =>
    config.get("no") === false
);

test("Get null", () =>
    config.get("nil") === null
);

test("Get a copy of an array", () =>
    config.get("arr")[0] = 54 &&
    config.get("arr")[0] === 3
);

test("Get a copy of an object", () =>
    config.get("obj")["a"] = 54 &&
    config.get("obj")["a"] === 3
);

test("Get a missing value", () =>
    // It prints an error to the console and returns undefined.
    config.get("foo") === undefined
);

done();
