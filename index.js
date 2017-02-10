"use strict"

module.exports = {
  "extends": [
    "stylelint-config-standard",
  ],
  "rules": {
    "selector-pseudo-class-no-unknown": [ true, {
      ignorePseudoClasses: [
        "host",
        "host-context",
      ],
    } ],
    "selector-pseudo-element-no-unknown": [ true, {
      ignorePseudoElements: [
        "content",
        "shadow",
        "slotted",
      ],
    } ],
    "selector-type-no-unknown": [ true, {
      ignoreTypes: ["/^[a-zA-Z]([a-zA-Z0-9]*-[a-zA-Z0-9]+)+/"],
    } ],
  },
}
