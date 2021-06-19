/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import LoggedMenu from '../../commons/LoggedMenu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import SEO from '../../commons/SEO';
import { WebsitePageContext } from '../WebsitePage/context';
import FormPost from '../../patterns/FormPost';
import LoggedMenuFooter from '../../commons/LoggedMenuFooter';

export { WebsitePageContext } from '../WebsitePage/context';

export default function WebsiteUserPageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  user,
}) {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="space-between"
        {...pageBoxProps}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormPost propsDoModal={propsDoModal} onClose={() => setModalState(false)} />
          )}
        </Modal>
        {menuProps.logged && (
        <LoggedMenu
          onPostClick={() => setModalState(true)}
          user={user}
        />
        )}
        {children}
        {menuProps.logged && (
          <LoggedMenuFooter
            onPostClick={() => setModalState(true)}
            user={user}
          />
        )}
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsiteUserPageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsiteUserPageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
