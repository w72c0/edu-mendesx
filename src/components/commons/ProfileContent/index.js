/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Box from '../../foundation/layout/Box';
import ProfileHeader from '../ProfileHeader';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Text from '../../foundation/Text';

const ProfileContentWrapper = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 20px;
`;

export const ProfileRelationsBoxWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  ${breakpointsMedia({
    xs: css`
      display: flex;
    `,
    md: css`
      width: 908px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 72px;
    `,
  })}
  ul {
    display: grid;
    grid-gap: 4px;
    grid-template-columns: 1fr 1fr 1fr; 
    list-style: none;
    margin: 0;
    padding: 16px;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 112px;
    position: relative;
    overflow: hidden;
    ${breakpointsMedia({
    sm: css`
        height: 250px;
      `,
  })}
  }
`;

export default function ProfileContent({ posts }) {
  return (
    <ProfileContentWrapper>
      <ProfileHeader />

      <ProfileRelationsBoxWrapper>

        {posts.length === 0 && (
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              tag="span"
              variant="subTitle"
            >
              Não há dados... Faça um post!
            </Text>
          </Box>
        )}
        {posts.length > 0 && (
          <ul>
            {posts.map((itemAtual) => (
              // eslint-disable-next-line no-underscore-dangle
              <li key={itemAtual._id}>
                <a href={itemAtual.photoUrl}>
                  <img src={itemAtual.photoUrl} alt={itemAtual.description} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </ProfileRelationsBoxWrapper>
    </ProfileContentWrapper>
  );
}

ProfileContent.prototype = {
  posts: PropTypes.object.isRequired,
};
