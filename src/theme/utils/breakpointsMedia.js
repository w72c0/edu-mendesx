import { css } from 'styled-components';
import theme from '../index';

const { breakpoints } = theme;

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  // console.log(breakpointsNames); [ 'md' ]
  return breakpointsNames.map((breakpointName) => css`
            @media screen and (min-width : ${breakpoints[breakpointName]}px) {
                ${cssByBreakpoints[breakpointName]}
            }
        `);
}
