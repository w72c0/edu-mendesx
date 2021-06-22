/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Grid from '../../foundation/layout/Grid';
import ProfileInfo from '../ProfileInfo';

const ProfileAvatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  ${breakpointsMedia({
    md: css`
      width: 188px;
      height: 188px;
    `,
  })}
`;

export default function ProfileHeader() {
  return (
    <Grid.Container
      maxWidth={{
        md: '660px',
        lg: '660px',
        xl: '660px',
      }}
    >
      <Grid.Row
        flex="1"
        flexDirection="row"
      >
        <Grid.Col
          value={{ xs: 4, md: 6 }}
          display="flex"
          alignItems="flex-end"
          justifyContent="flex-end"
          paddingRight={{ xs: 0, md: '72px' }}
        >
          <ProfileAvatar src="/images/avatar.png" alt="avatar" />
        </Grid.Col>
        <Grid.Col
          value={{ xs: 8, md: 6 }}
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="center"
        >
          <Grid.Container
            style={{ paddingRight: '10px', paddingLeft: 0 }}
          >
            <Grid.Row>
              <Grid.Col
                value={{ xs: 4 }}
              >
                <ProfileInfo
                  value="234"
                  title="Publicações"
                />
              </Grid.Col>
              <Grid.Col
                value={{ xs: 4 }}
              >
                <ProfileInfo
                  value="22k"
                  title="Seguindo"
                />
              </Grid.Col>
              <Grid.Col
                value={{ xs: 4 }}
              >
                <ProfileInfo
                  value="134k"
                  title="Seguidores"
                />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row
              marginTop="32px"
              display={{ xs: 'none', md: 'flex' }}
            >
              <Grid.Col
                value="12"
              >
                <ProfileInfo
                  value="Nicolas Cage"
                  title="A wholesome person responsible for the best movies ever."
                  variantTitle="profileTitle"
                  variantValue="profileBio"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid.Container>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 0 }}
          alignItems="flex-start"
          justifyContent="center"
          display={{ xs: 'flex', md: 'none' }}
          paddingTop={{ xs: '16px', md: '0' }}
        >
          <ProfileInfo
            value="Nicolas Cage"
            title="A wholesome person responsible for the best movies ever."
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
