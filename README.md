# A simple Config helper for nodejs

**config-json** is very simple, zero dependencies library for reading config files in JSON format.
It reads private setting from a separate local config file.

Homepage: https://github.com/popovmp/config-json

## Synopsis

```javascript
// make a config.json file with your settings
// init the config in index.js
const configJson = require("config-json").init(__dirname);
const value = configJson.get("key");

// in the other files
const configJson = require("config-json");
const value = configJson.get("key");
 
````

## Installation

```
npm install @popovmp/config-json
```

## Usage

**config-json** must be initialized with the path to the folder, which contains the config files.
It is a good idea to set the base path relative to `__dirname`.

You have to initialize the config lib only once. It is best to do it in the application main script `index.js` or `app.js`. 

**config-json** reads two files: `config.json` and `config-local.json`.
The first file must exist. The second one is optional.

The records from `config-local.json` overrides the records of `config.json`.

Have a `config.json` file as follows:

```json
{
  "key": 42,
  "arr": [1, 2]
}
```
Have a `config-local.json` file with your private settings as follows:

```json
{
  "secret": "vim rocks!"
}
```

```javascript
const configJson = require("config-json");
configJson.init(__dirname);

const value  = configJson.get("key");    // gets 42
const secret = configJson.get("secret"); // gets "vim rocks!"
```

or

```javascript
const configJson = require("config-json").init(__dirname);

const value  = configJson.get("key");    // gets 42
const secret = configJson.get("secret"); // gets "vim rocks!"
```

It is a good idea to separate the settings in two config files:
  - `config.json` file with your public settings
  - `config-local.json` with your private settings. It can be put in `.gitignore` to prevent it from publishing.


**config-json** clones the provided values. It guarantees that the values cannot be changed from the code.

```javascript
const arr1 = configJson.get("arr");
arr1[0] = 42;

const arr2 = configJson.get("arr");
console.log(arr2[0]); // => 1;
```  

## Methods

**config-json** exports two methods:

```javascript
/**
 * Reads the config file at startup.
 * @param {string} basePath - dircetory that conatins config.js
 * @return { { get } };
 */
configJson.init(basePath);

````

```javascript
/**
 * Gets a value from the config file
 * @param  { string } key
 * @return { any } value
 */
configJson.get(key);
````

## License

`config-json` is free for use and modification. No responsibilities for damages of any kind.

Copyright (c) 2020 Miroslav Popov
