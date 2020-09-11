# A simple Config helper for nodejs

**config-json** is a very simple helper for reading config files in a JSON format.
It can read private setting from a separate local config file.

Homepage: https://github.com/popovmp/config-json#readme

## Synopsis

```javascript
// Make a config.json file with your settings

// Initialise config-json once in your index.js
const config = require('@popovmp/config-json').init(__dirname);
const value = config.get('key');

// Use it in your other files
const config = require('@popovmp/config-json');
const value = config.get('key');

// You can also use the configGet exposed method
const { configGet } = require('@popovmp/config-json');
const value = configGet('key');
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
const config = require('@popovmp/config-json');
config.init(__dirname);

const value  = config.get('key');    // gets 42 (read from config.json)
const secret = config.get('secret'); // gets 'vim rocks!' (read from config-local.json)
```

or

```javascript
const { configGet } = require('@popovmp/config-json').init(__dirname);

const value  = configGet('key');    // gets 42
const secret = configGet('secret'); // gets 'vim rocks!'
```

If you have private or local settings, you can separate them in two configs files:
  - `config.json` file with your public settings
  - `config-local.json` with your private settings. It can be put in `.gitignore` to prevent it from publishing.

**config-json** clones the provided values. It guarantees that the values cannot be changed from the code.

```javascript
const arr1 = configGet('arr');
arr1[0] = 42;

const arr2 = configGet('arr');
console.log(arr2[0]); // => 1;
```  

## Methods

**config-json** exports two methods:

```javascript
/**
 * Reads the config file at startup.
 * @param {string} basePath - dircetory that conatins config.js
 * @return { {get, configGet} };
 */
function init(basePath) { }
````

```javascript
/**
 * Gets a value from the config file
 * @param  { string } key
 * @return { any } value
 */
function get(key) { }
```

```javascript
/**
 * Gets a value from the config file
 * @param  { string } key
 * @return { any } value
 */
function configGet(key) { }
````

## License

`config-json` is free for use and modification. No responsibilities for damages of any kind.

Copyright (c) 2020 Miroslav Popov
