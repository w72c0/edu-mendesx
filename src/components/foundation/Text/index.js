import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
    paragraph1: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
    `,
    smallestException: css`
        font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
    `,
}

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]}
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')}
    /* ${function (props) {
        return propToStyle('textAlign', props)
    }} */
    /* ${function(props){
        console.log(props.textAlign)

        return {
            textAlign: props.textAlign,
        }
    }} */

`;

export default function Text({ tag, variant, children, ...props }) {
    return (
        <TextBase
            as={tag}
            variant={variant}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
    variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
  }; 

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
}