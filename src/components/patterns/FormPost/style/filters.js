import styled from 'styled-components';

const FilterPreview = styled.figure`
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

.filter-1977 {
  -webkit-filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);
  filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);
}

.filter-aden {
  -webkit-filter: sepia(.2) brightness(1.15) saturate(1.4);
  filter: sepia(.2) brightness(1.15) saturate(1.4);
}

.filter-aden::before {
  background: rgba(125, 105, 24, .1);
  content: "";
  mix-blend-mode: multiply;
}

.filter-amaro {
  -webkit-filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);
  filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);
}

.filter-amaro::before {
  background: rgba(125, 105, 24, .2);
  content: "";
  mix-blend-mode: overlay;
}

.filter-ashby {
  -webkit-filter: sepia(.5) contrast(1.2) saturate(1.8);
  filter: sepia(.5) contrast(1.2) saturate(1.8);
}

.filter-ashby::before {
  background: rgba(125, 105, 24, .35);
  content: "";
  mix-blend-mode: lighten;
}

.filter-brannan {
  -webkit-filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);
  filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);
}

.filter-brooklyn {
  -webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);
  filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);
}

.filter-brooklyn::before {
  background: rgba(127, 187, 227, .2);
  content: "";
  mix-blend-mode: overlay;
}

.filter-charmes {
  -webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);
  filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);
}

.filter-charmes::before {
  background: rgba(125, 105, 24, .25);
  content: "";
  mix-blend-mode: darken;
}

.filter-clarendon {
  -webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);
  filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);
}

.filter-clarendon::before {
  background: rgba(127, 187, 227, .4);
  content: "";
  mix-blend-mode: overlay;
}

.filter-crema {
  -webkit-filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg);
  filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg);
}

.filter-crema::before {
  background: rgba(125, 105, 24, .2);
  content: "";
  mix-blend-mode: multiply;
}

.filter-dogpatch {
  -webkit-filter: sepia(.35) saturate(1.1) contrast(1.5);
  filter: sepia(.35) saturate(1.1) contrast(1.5);
}

.filter-earlybird {
  -webkit-filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);
  filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);
}

.filter-earlybird::before {
  background: radial-gradient(circle closest-corner, transparent 0, rgba(125, 105, 24, .2) 100%);
  background: -o-radial-gradient(circle closest-corner, transparent 0, rgba(125, 105, 24, .2) 100%);
  background: -moz-radial-gradient(circle closest-corner, transparent 0, rgba(125, 105, 24, .2) 100%);
  background: -webkit-radial-gradient(circle closest-corner, transparent 0, rgba(125, 105, 24, .2) 100%);
  content: "";
  mix-blend-mode: multiply;
}

.filter-gingham {
  -webkit-filter: contrast(1.1) brightness(1.1);
  filter: contrast(1.1) brightness(1.1);
}

.filter-gingham::before {
  background: #e6e6e6;
  content: "";
  mix-blend-mode: soft-light;
}

.filter-ginza {
  -webkit-filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg);
  filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg);
}

.filter-ginza::before {
  background: rgba(125, 105, 24, .15);
  content: "";
  mix-blend-mode: darken;
}

.filter-hefe {
  -webkit-filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);
  filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);
}

.filter-hefe::before {
  background: radial-gradient(circle closest-corner, transparent 0, rgba(0, 0, 0, .25) 100%);
  background: -o-radial-gradient(circle closest-corner, transparent 0, rgba(0, 0, 0, .25) 100%);
  background: -moz-radial-gradient(circle closest-corner, transparent 0, rgba(0, 0, 0, .25) 100%);
  background: -webkit-radial-gradient(circle closest-corner, transparent 0, rgba(0, 0, 0, .25) 100%);
  content: "";
  mix-blend-mode: multiply;
}

.filter-helena {
  -webkit-filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35);
  filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35);
}

.filter-helena::before {
  background: rgba(158, 175, 30, .25);
  content: "";
  mix-blend-mode: overlay;
}

.filter-hudson {
  -webkit-filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg);
  filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg);
}

.filter-hudson::before {
  background: radial-gradient(circle closest-corner, transparent 25%, rgba(25, 62, 167, .25) 100%);
  background: -o-radial-gradient(circle closest-corner, transparent 25%, rgba(25, 62, 167, .25) 100%);
  background: -moz-radial-gradient(circle closest-corner, transparent 25%, rgba(25, 62, 167, .25) 100%);
  background: -webkit-radial-gradient(circle closest-corner, transparent 25%, rgba(25, 62, 167, .25) 100%);
  content: "";
  mix-blend-mode: multiply;
}

.filter-inkwell {
  -webkit-filter: brightness(1.25) contrast(.85) grayscale(1);
  filter: brightness(1.25) contrast(.85) grayscale(1);
}

.filter-juno {
  -webkit-filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8);
  filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8);
}

.filter-juno::before {
  background: rgba(127, 187, 227, .2);
  content: "";
  mix-blend-mode: overlay;
}

.filter-kelvin {
  -webkit-filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);
  filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);
}

.filter-kelvin::before {
  background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .25) 0, rgba(128, 78, 15, .5) 100%);
  background: -o-radial-gradient(circle closest-corner, rgba(128, 78, 15, .25) 0, rgba(128, 78, 15, .5) 100%);
  background: -moz-radial-gradient(circle closest-corner, rgba(128, 78, 15, .25) 0, rgba(128, 78, 15, .5) 100%);
  background: -webkit-radial-gradient(circle closest-corner, rgba(128, 78, 15, .25) 0, rgba(128, 78, 15, .5) 100%);
  content: "";
  mix-blend-mode: overlay;
}

.filter-lark {
  -webkit-filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25);
  filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25);
}

.filter-lofi {
  -webkit-filter: saturate(1.1) contrast(1.5);
  filter: saturate(1.1) contrast(1.5);
}

.filter-ludwig {
  -webkit-filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2);
  filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2);
}

.filter-ludwig::before {
  background: rgba(125, 105, 24, .1);
  content: "";
  mix-blend-mode: overlay;
}

.filter-maven {
  -webkit-filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75);
  filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75);
}

.filter-maven::before {
  background: rgba(158, 175, 30, .25);
  content: "";
  mix-blend-mode: darken;
}

.filter-mayfair {
  -webkit-filter: contrast(1.1) brightness(1.15) saturate(1.1);
  filter: contrast(1.1) brightness(1.15) saturate(1.1);
}

.filter-mayfair::before {
  background: radial-gradient(circle closest-corner, transparent 0, rgba(175, 105, 24, .4) 100%);
  background: -o-radial-gradient(circle closest-corner, transparent 0, rgba(175, 105, 24, .4) 100%);
  background: -moz-radial-gradient(circle closest-corner, transparent 0, rgba(175, 105, 24, .4) 100%);
  background: -webkit-radial-gradient(circle closest-corner, transparent 0, rgba(175, 105, 24, .4) 100%);
  content: "";
  mix-blend-mode: multiply;
}

.filter-moon {
  -webkit-filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35);
  filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35);
}

.filter-nashville {
  -webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
  filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
}

.filter-nashville::before {
  background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(128, 78, 15, .65) 100%);
  background: -o-radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(128, 78, 15, .65) 100%);
  background: -moz-radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(128, 78, 15, .65) 100%);
  background: -webkit-radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(128, 78, 15, .65) 100%);
  content: "";
  mix-blend-mode: screen;
}

.filter-perpetua {
  -webkit-filter: contrast(1.1) brightness(1.25) saturate(1.1);
  filter: contrast(1.1) brightness(1.25) saturate(1.1);
}

.filter-perpetua::before {
  background: linear-gradient(to bottom, rgba(0, 91, 154, .25), rgba(230, 193, 61, .25));
  background: -o-linear-gradient(top, rgba(0, 91, 154, .25), rgba(230, 193, 61, .25));
  background: -moz-linear-gradient(top, rgba(0, 91, 154, .25), rgba(230, 193, 61, .25));
  background: -webkit-linear-gradient(top, rgba(0, 91, 154, .25), rgba(230, 193, 61, .25));
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 91, 154, .25)), to(rgba(230, 193, 61, .25)));
  content: "";
  mix-blend-mode: multiply;
}

.filter-poprocket {
  -webkit-filter: sepia(.15) brightness(1.2);
  filter: sepia(.15) brightness(1.2);
}

.filter-poprocket::before {
  background: radial-gradient(circle closest-corner, rgba(206, 39, 70, .75) 40%, black 80%);
  background: -o-radial-gradient(circle closest-corner, rgba(206, 39, 70, .75) 40%, black 80%);
  background: -moz-radial-gradient(circle closest-corner, rgba(206, 39, 70, .75) 40%, black 80%);
  background: -webkit-radial-gradient(circle closest-corner, rgba(206, 39, 70, .75) 40%, black 80%);
  content: "";
  mix-blend-mode: screen;
}

.filter-reyes {
  -webkit-filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4);
  filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4);
}

.filter-rise {
  -webkit-filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9);
  filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9);
}

.filter-rise::before {
  background: radial-gradient(circle closest-corner, transparent 0, rgba(230, 193, 61, .25) 100%);
  background: -o-radial-gradient(circle closest-corner, transparent 0, rgba(230, 193, 61, .25) 100%);
  background: -moz-radial-gradient(circle closest-corner, transparent 0, rgba(230, 193, 61, .25) 100%);
  background: -webkit-radial-gradient(circle closest-corner, transparent 0, rgba(230, 193, 61, .25) 100%);
  content: "";
  mix-blend-mode: lighten;
}

.filter-sierra {
  -webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
  filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
}

.filter-sierra::before {
  background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(0, 0, 0, .65) 100%);
  background: -o-radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(0, 0, 0, .65) 100%);
  background: -moz-radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(0, 0, 0, .65) 100%);
  background: -webkit-radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(0, 0, 0, .65) 100%);
  content: "";
  mix-blend-mode: screen;
}

.filter-skyline {
  -webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2);
  filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2);
}

.filter-slumber {
  -webkit-filter: sepia(.35) contrast(1.25) saturate(1.25);
  filter: sepia(.35) contrast(1.25) saturate(1.25);
}

.filter-slumber::before {
  background: rgba(125, 105, 24, .2);
  content: "";
  mix-blend-mode: darken;
}

.filter-stinson {
  -webkit-filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25);
  filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25);
}

.filter-stinson::before {
  background: rgba(125, 105, 24, .45);
  content: "";
  mix-blend-mode: lighten;
}

.filter-sutro {
  -webkit-filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg);
  filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg);
}

.filter-sutro::before {
  background: radial-gradient(circle closest-corner, transparent 50%, rgba(0, 0, 0, .5) 90%);
  background: -o-radial-gradient(circle closest-corner, transparent 50%, rgba(0, 0, 0, .5) 90%);
  background: -moz-radial-gradient(circle closest-corner, transparent 50%, rgba(0, 0, 0, .5) 90%);
  background: -webkit-radial-gradient(circle closest-corner, transparent 50%, rgba(0, 0, 0, .5) 90%);
  content: "";
  mix-blend-mode: darken;
}

.filter-toaster {
  -webkit-filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg);
  filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg);
}

.filter-toaster::before {
  background: radial-gradient(circle, #804e0f, rgba(0, 0, 0, .25));
  background: -o-radial-gradient(circle, #804e0f, rgba(0, 0, 0, .25));
  background: -moz-radial-gradient(circle, #804e0f, rgba(0, 0, 0, .25));
  background: -webkit-radial-gradient(circle, #804e0f, rgba(0, 0, 0, .25));
  content: "";
  mix-blend-mode: screen;
}

.filter-valencia {
  -webkit-filter: sepia(.25) contrast(1.1) brightness(1.1);
  filter: sepia(.25) contrast(1.1) brightness(1.1);
}

.filter-valencia::before {
  background: rgba(230, 193, 61, .1);
  content: "";
  mix-blend-mode: lighten;
}

.filter-vesper {
  -webkit-filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3);
  filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3);
}

.filter-vesper::before {
  background: rgba(125, 105, 24, .25);
  content: "";
  mix-blend-mode: overlay;
}

.filter-walden {
  -webkit-filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4);
  filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4);
}

.filter-walden::before {
  background: rgba(229, 240, 128, .5);
  content: "";
  mix-blend-mode: darken;
}

.filter-willow {
  -webkit-filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2);
  filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2);
}

.filter-xpro-ii {
  -webkit-filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);
  filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);
}

.filter-xpro-ii::before {
  background: radial-gradient(circle closest-corner, rgba(0, 91, 154, .35) 0, rgba(0, 0, 0, .65) 100%);
  background: -o-radial-gradient(circle closest-corner, rgba(0, 91, 154, .35) 0, rgba(0, 0, 0, .65) 100%);
  background: -moz-radial-gradient(circle closest-corner, rgba(0, 91, 154, .35) 0, rgba(0, 0, 0, .65) 100%);
  background: -webkit-radial-gradient(circle closest-corner, rgba(0, 91, 154, .35) 0, rgba(0, 0, 0, .65) 100%);
  content: "";
  mix-blend-mode: multiply;
}
`;

export { FilterPreview as default };
