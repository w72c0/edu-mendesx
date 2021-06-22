import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const LoggedMenuWrapper = styled.div`
  background-color: white;
  position: sticky;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  list-style: none;
  z-index: 100;
  
  ${breakpointsMedia({
    xs: css`
      display: none;
    `,
    md: css`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      bottom: unset;
      border-radius: 0;
      height: 96px;
      div {
        height: 64px;
      }
    `,
  })}
`;

LoggedMenuWrapper.Logo = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  flex-grow: 1;
`;

LoggedMenuWrapper.Nav = styled.nav`
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px;

  ${breakpointsMedia({
    sm: css`
      width: 60%;
      justify-content: space-evenly;
      flex-grow: 2;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}


  img {
    width: 32px;
    height: 32px;
    border: 0;
  }


  #home {
    order: 2;
  }

  #search {
    order: 1;
    margin-top: 35px;
  }

  #input {
    background: url('/images/search.svg');
    padding: 10px 42px;
    background-position: 15px center;
    background-repeat: no-repeat;
    width:250px;
  }


  #add {
    order: 2;
    img {
      width: 40px;
      height: 40px;
    }
  }

  #like {
    order: 4;
  }

  #avatar {
    order: 5;
    img {
      border-radius: 50%;
      border: 2px solid #D7385E;
      border: 0;
    }
  }
`;

export default LoggedMenuWrapper;
