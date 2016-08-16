# Conjugarden

## Introduction
Learn Spanish conjugation the easy way.

## Dependencies

* Python 3: build the dictionary
* Node.js: main application

## Screenshots
![Exercise](https://github.com/hghwng/conjugarden/raw/master/screenshots/exercise.png)

![Query](https://github.com/hghwng/conjugarden/raw/master/screenshots/query.png)

## Build

Build the conjugation dictionary first:

```bash
cd data && ./process.py
```

The build script writes the processed dictionary into `site/data.json`

Then start the server:

```bash
cd site && node app.js
```

The server listens to port 8080 by default. Open http://localhost:8080 to use.


Enjoy!
