# stylelint-config-polymer

> The shareable stylelint config for Polymer elements. Extends from `stylelint-config-standard`

## Installation

```console
$ npm install stylelint-config-polymer
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "stylelint-config-polymer",
  "processors": [ "stylelint-processor-html" ]
}
```

**Note:** you need to install [stylelint-processor-html](https://github.com/ccbikai/stylelint-processor-html) to lint inline styles.

## Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the indentation to tabs and turn off the `number-leading-zero` rule:

```json
{
  "extends": "stylelint-config-polymer",
  "processors": [ "stylelint-processor-html" ],
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## Description of used additions

`stylelint-config-polymer` is based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) with some additions:

-   [selector-type-no-unknown](https://github.com/stylelint/stylelint/tree/master/src/rules/selector-type-no-unknown) is configured to match Custom Elements selectors
-   [selector-pseudo-class-no-unknown](https://github.com/stylelint/stylelint/tree/master/src/rules/selector-pseudo-class-no-unknown) is configured to ignore `:host` and `:host-context` selector
-   [selector-pseudo-element-no-unknown](https://github.com/stylelint/stylelint/tree/master/src/rules/selector-pseudo-element-no-unknown) is configured to ignore `::content`, `::slotted` and `::shadow` selectors

**Note**: `::shadow` support will be dropped in the 2.0 release, as it is deprecated. Please do not use it unless you really need.


## [Changelog](CHANGELOG.md)

## [License](LICENSE)
