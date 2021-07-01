/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import LoggedMenuWrapper from './styles/LoggedMenuWrapper';

export default function LoggedMenuFooter({ onPostClick }) {
  return (
    <LoggedMenuWrapper>
      <LoggedMenuWrapper.Nav>
        <li id="home">
          <Link href="/app/profile">
            <img src="/images/home.svg" alt="home" />
          </Link>
        </li>
        <li id="search"><img src="/images/search.svg" alt="search" /></li>
        <li id="add"><img src="/images/postIcon.svg" alt="add" onClick={() => onPostClick()} /></li>
        <li id="like"><img src="/images/heart.svg" alt="like" /></li>
        <li id="avatar"><img src="/images/avatar.png" alt="avatar" /></li>
      </LoggedMenuWrapper.Nav>
    </LoggedMenuWrapper>
  );
}

LoggedMenuFooter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  onPostClick: PropTypes.func.isRequired,
};
