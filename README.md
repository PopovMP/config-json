# A simple Config helper for nodejs

**config-json** is very simple, zero dependencies library for reading config files in JSON format.
It reads private setting from a separate local config file.

Homepage: https://github.com/popovmp/config-json

## Synopsis

```javascript
// Make a config.json file with your settings
// Init `config-json` in your index.js
const config = require("config-json").init(__dirname);
const value = config.get("key");

// Use it in your other files
const config = require("config-json");
const value = config.get("key");
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

Example `config.json` file as follows:

```json
{
  "key": 42,
  "arr": [1, 2]
}
```

Example `config-local.json` file with your private settings as follows:

```json
{
  "secret": "vim rocks!"
}
```

```javascript
const config = require("config-json");
config.init(__dirname);

const value  = config.get("key");    // gets 42 (read from config.json)
const secret = config.get("secret"); // gets "vim rocks!" (read from config-local.json)
```

or

```javascript
const config = require("config-json").init(__dirname);

const value  = config.get("key");    // gets 42
const secret = config.get("secret"); // gets "vim rocks!"
```

If you have private or local settings, you can separate them in two config files:
  - `config.json` file with your public settings
  - `config-local.json` with your private settings. It can be put in `.gitignore` to prevent it from publishing.

**config-json** clones the provided values. It guarantees that the values cannot be changed from the code.

```javascript
const arr1 = config.get("arr");
arr1[0] = 42;

const arr2 = config.get("arr");
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
config.init(basePath);

````

```javascript
/**
 * Gets a value from the config file
 * @param  { string } key
 * @return { any } value
 */
config.get(key);
````

## License

`config-json` is free for use and modification. No responsibilities for damages of any kind.

Copyright (c) 2020 Miroslav Popov
