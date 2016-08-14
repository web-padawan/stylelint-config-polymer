# stylelint-config-standard

> The standard shareable config for Polymer elements.

## Installation

```console
$ npm install stylelint-config-polymer
```

## Usage

Set your stylelint config to::

```json
{
  "extends": "stylelint-config-polymer"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the indentation to tabs and turn off the `number-leading-zero` rule:

```json
{
  "extends": "stylelint-config-polymer",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

#### Used additions

`stylelint-config-polymer` is based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) with some additions:

- [selector-type-no-unknown](https://github.com/stylelint/stylelint/tree/master/src/rules/selector-type-no-unknown) is configured to match Custom Elements selectors
- [selector-pseudo-class-no-unknown](https://github.com/stylelint/stylelint/tree/master/src/rules/selector-pseudo-class-no-unknown) is configured to ignore `:host` selector
- [selector-pseudo-element-no-unknown](https://github.com/stylelint/stylelint/tree/master/src/rules/selector-pseudo-element-no-unknown) is configured to ignore `:content` and `::shadow` selectors

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
