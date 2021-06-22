/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import ProfileContent from '../../commons/ProfileContent';
import Box from '../../foundation/layout/Box';

export default function ProfilePage(props) {
  const { posts } = props;
  const { user } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      marginTop="32px"
    >
      <ProfileContent posts={posts} user={user} />
    </Box>
  );
}

ProfilePage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  user: PropTypes.object.isRequired,
};
