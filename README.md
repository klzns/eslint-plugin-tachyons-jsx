# eslint-plugin-tachyons-jsx

Linter for Tachyons in JSX

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-tachyons-jsx`:

```
$ npm install eslint-plugin-tachyons-jsx --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-tachyons-jsx` globally.

## Usage

Add `tachyons-order` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "tachyons-jsx"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "tachyons-jsx/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





