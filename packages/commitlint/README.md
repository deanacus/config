# @deanacus/commitlint-config

My personal preferred Commitlint configuration

## Installation

```sh
yarn add --dev @deanacus/commitlint-config
```

```sh
npm install --save-dev @deanacus/commitlint-config
```

## Usage

Add a `"commitlint"` entry to your `package.json` file:

```json
{
  // ...etc
  "commitlint": { "extends": "@deanacus/commitlint-config" }
  // ...etc
}
```

## Extending/Overriding

Create or update your `commitlint.config.js` file, and import the config like
so:

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // ...overrides, etc
};
```

---

For more detailed information on configuring Commitlint, see the
[Commitlint website](https://commitlint.js.org/).
