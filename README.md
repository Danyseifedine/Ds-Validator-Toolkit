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

## Use the package without installing it

You can use Validator Toolkit directly in the browser without installing it:

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
