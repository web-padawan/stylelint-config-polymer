"use strict"

const config = require("../")
const stylelint = require("stylelint")

const validCss = (
`
:host {
  display: block;
}

:host-context([dir="rlt"]) {
  float: right;
}

.input-content ::content > paper-input {
  width: 100%;
}

:host ::shadow .input {
  color: red;
}

.wrapper ::slotted(.icon) {
  color: #000;
}

`)

const invalidCss = (
`1-no-way {
  color: red;
}

`)

describe("flags no warnings with valid css", () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config,
    })
  })

  it("did not error", () => {
    return result.then(data => (
      expect(data.errored).toBeFalsy()
    ))
  })

  it("flags no warnings", () => {
    return result.then(data => (
      expect(data.results[0].warnings.length).toBe(0)
    ))
  })
})

describe("flags warnings with invalid css", () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config,
    })
  })

  it("did error", () => {
    return result.then(data => (
      expect(data.errored).toBeTruthy()
    ))
  })

  it("flags one warning", () => {
    return result.then(data => (
      expect(data.results[0].warnings.length).toBe(1)
    ))
  })

  it("correct warning text", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].text).toBe("Unexpected unknown type selector \"1-no-way\" (selector-type-no-unknown)")
    ))
  })

  it("correct rule flagged", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].rule).toBe("selector-type-no-unknown")
    ))
  })

  it("correct severity flagged", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].severity).toBe("error")
    ))
  })

  it("correct line number", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].line).toBe(1)
    ))
  })

  it("correct column number", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].column).toBe(1)
    ))
  })
})
