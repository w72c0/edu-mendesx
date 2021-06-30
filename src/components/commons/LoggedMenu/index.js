/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Logo from '../../../theme/Logo';
import TextField from '../../forms/TextField';
import Link from '../Link';
import LoggedMenuWrapper from './styles/LoggedMenuWrapper';
import Button from '../Button';
import { loginService } from '../../../services/login/loginService';

export default function LoggedMenu({ onPostClick }) {
  const redirect = useRouter();

  const handleLogout = async () => {
    await loginService.logout(null);
    redirect.push('/');
  };
  return (
    <LoggedMenuWrapper>
      <LoggedMenuWrapper.Logo>
        <Logo />
      </LoggedMenuWrapper.Logo>
      <LoggedMenuWrapper.Nav>
        <li id="home">
          <Link href="/app/profile">
            <img src="/images/home.svg" alt="home" />
          </Link>
        </li>
        <li id="search">
          <TextField
            id="input"
            placeholder="Pesquisar"
            name="search"
            type="search"
            onChange={() => {}}
          />
        </li>
        <li id="add">
          <Button ghost>
            <img src="/images/postIcon.svg" alt="add" onClick={() => onPostClick()} />
          </Button>
        </li>
        <li id="like">
          <Button ghost>
            <img src="/images/heart.svg" alt="like" />
          </Button>
        </li>
        <li id="avatar">
          <Button ghost onClick={handleLogout}>
            <img src="/images/avatar.png" alt="avatar" />
          </Button>
        </li>
      </LoggedMenuWrapper.Nav>
    </LoggedMenuWrapper>
  );
}

LoggedMenu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  onPostClick: PropTypes.func.isRequired,
};
