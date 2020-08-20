# A simple Config helper for nodejs

`config-json` is very simple and zero dependencies library for reading config files in JSON format.

Homepage: https://github.com/PopovMP/config-json

## Synopsis

    ```javascript
    const configJson = require("config-json").init(__dirname);
    const value = configJson.get("key");
    ````

## Usage

   The `config-json` must be initialized with the path to the folder, which contains the config files.
   
   `config-json` reads two files: `config.json` and `config-local.json`. The first file must exist.
   
   The records from `config-local.json` overrides the records of `config.json`.

## License

`config-json` is free for use and modification. No responsibilities for damages of any kind.

Copyright (c) 2020 Miroslav Popov
