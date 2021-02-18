# @deanacus/prettier-config

My personal preferred Prettier configuration

## Installation

```sh
yarn add --dev @deanacus/prettier-config
```

```sh
npm install --save-dev @deanacus/prettier-config
```

## Usage

Add a `"prettier"` entry to your `package.json` file:

```json
{
  // ...etc
  "prettier": "@deanacus/prettier-config"
  // ...etc
}
```

## Extending/Overriding

Create or update your `.prettierrc.js` file, and import the config like so:

```js
module.exports = {
  ...require('@deanacus/prettier-config'),
  semi: false,
  // ...etc
};
```

---

For more detailed information on configuring Prettier, see the
[Prettier website](https://prettier.io).
