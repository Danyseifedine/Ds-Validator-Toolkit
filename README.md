<p align="center">
  <img src="https://raw.githubusercontent.com/daniseifeddine/Ds-Validator-Toolkit/main/media/logo.png" alt="Logo" width="450">
</p>

# Validator Toolkit

A comprehensive toolkit for data validation in JavaScript.

## Description

Validator Toolkit provides a set of tools and utilities to validate various types of data, including strings, numbers, arrays, and objects. Whether you're building a web application, API, or any other software that deals with user input, Validator Toolkit can help ensure that your data meets the required criteria.

## Installation and Usage

### Server-side

To install Validator Toolkit using npm, run the following command:

```bash
npm install ds-validator-toolkit
```

## Browser Usage (ESM)

You can use Validator Toolkit directly in the browser without installing it by importing the desired functions from the unpkg.com CDN:

```html
<script type="module">
  // inporting package from the URL
  import { VALIDATE_STRING } from "https://unpkg.com/ds-validator-toolkit/dist/index.mjs";

  let name = VALIDATE_STRING.validateString("Mareline", {
    // options...
  });

  console.log(name);
</script>
```

## ES6 Modules

If you're using ES6 modules in your project, you can import the desired functions from the package:

```javascript

import { _STR_, VALIDATE_STRING } from "./node_modules/ds-validator-toolkit/dist/index.mjs";

</script>
```

```html
<script src="./app.js" type="module"></script>
```

## Webpack Integration

If you're using Webpack, you can easily integrate Validator Toolkit into your project. Follow these steps:

1- Initialize a new npm project using:

```bash
npm init -y
```

2- Install the required dependencies:

```bash
npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env --save-dev
```

3-Create a webpack.config.js file with the following configuration:

```javascript

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};

</script>
```

4- Create a src folder and an index.js file within it. You can import the desired functions from the package in this file:

```javascript
import { _STR_, VALIDATE_STRING } from "ds-validator-toolkit";
```

5- In your HTML file, include the bundled JavaScript file:

```html
<script src="./dist/index.js" type="module"></script>
```

6- Run npm run build to generate the bundled JavaScript file (dist/bundle.js).

> With these steps, you should be able to use Validator Toolkit in your Webpack project.


