import config from "../"
import stylelint from "stylelint"
import test from "ava"

const validCss = (
`@import url(x.css);
@import url(y.css);

/**
 * Multi-line comment
 */

:host {
  display: block;
  padding: 8px 0;

  @apply(--paper-input-container);
}

.input-content ::content input,
.input-content ::content textarea,
.input-content ::content iron-autogrow-textarea,
.input-content ::content .paper-input-input {
  position: relative; /* to make a stacking context */
  outline: none;
  box-shadow: none;
  padding: 0;
  width: 100%;
  max-width: 100%;
  background: transparent;
  border: none;
  color: var(--paper-input-container-input-color, --primary-text-color);
  -webkit-appearance: none;
  text-align: inherit;

  @apply(--paper-font-subhead);
  @apply(--paper-input-container-input);
}

.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  box-sizing: border-box;
  display: block;
  color: #333;
}

.selector-a,
.selector-b:not(:first-child) {
  padding: 10px !important;
  top: calc(calc(1em * 2) / 3);
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */

@media (min-width >= 60em) {
  .selector {
    /* Flush to parent comment */
    transform: translate(1, 1) scale(3);
  }
}

@media (min-orientation: portrait), projection and (color) {
  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: helvetica, "arial black", sans-serif;
  }
}

/* Flush single line comment */
@media
  screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
  .selector {
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        #fff 25px,
        rgba(255, 255, 255, 1) 50px
      );
    margin: 10px;
    margin-bottom: 5px;
    box-shadow:
      0 1px 1px #000,
      0 1px 0 #fff,
      2px 2px 1px 1px #ccc inset;
    height: 10rem;
  }

  /* Flush nested single line comment */
  .selector::after {
    content: '→';
    background-image: url(x.svg);
  }
}

`)

const invalidCss = (
`a {
  top: .2em;
}

`)

test("no warnings with valid css", t => {
  return stylelint.lint({
    code: validCss,
    config: config,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.falsy(errored, "no errored")
    t.is(warnings.length, 0, "flags no warnings")
  })
})

test("a warning with invalid css", t => {
  return stylelint.lint({
    code: invalidCss,
    config: config,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.truthy(errored, "errored")
    t.is(warnings.length, 1, "flags one warning")
    t.is(warnings[0].text, "Expected a leading zero (number-leading-zero)", "correct warning text")
  })
})
