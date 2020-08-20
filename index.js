"use strict";

const fs = require("fs");
const path = require("path");

let isInit = false;
let config = {};
let configLocal = {};

/**
 * Reads the config file at startup.
 *
 * @function init
 *
 * @param {string} basePath
 * @return { { get: get } };
 */
function init(basePath) {
    if (!isInit) {
        isInit = true;
        initConfig(basePath);
    }

    return {
        get,
    };
}

/**
 * Gets a value from the config file
 *
 * @function get
 *
 * @param  { string } key
 * @return { any } value
 */
function get(key) {
    const val = configLocal.hasOwnProperty(key)
        ? configLocal[key]
        : config[key];

    if (typeof val === "undefined") {
        console.error("Requested an undefined key: " + key);
        return undefined;
    }

    return cloneObject(val);
}

/**
 * Clones a value
 *
 * @param { any | null | undefined } source
 * @return { any }
 */
function cloneObject(source) {
    if (!source) {
        return source;
    }

    const type = typeof source;

    if (["string", "number", "boolean"].includes(type)) {
        return source;
    }

    if (Array.isArray(source) || type === "object") {
        return JSON.parse(JSON.stringify(source));
    }

    return source;
}

/**
 * Reads the config files
 *
 * @param { string } basePath
 */
function initConfig(basePath) {
    const configPath = path.join(basePath, "config.json");
    if (fs.existsSync(configPath)) {
        const configText = fs.readFileSync(configPath, "utf8");
        config = JSON.parse(configText);
    } else {
        console.error("No config.json found at: " + basePath);
    }

    const configLocalPath = path.join(basePath, "config-local.json");
    if (fs.existsSync(configLocalPath)) {
        const configLocalText = fs.readFileSync(configLocalPath, "utf8");
        configLocal = JSON.parse(configLocalText);
    }
}

module.exports = {
    get,
    init,
};
