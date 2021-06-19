/* eslint-disable import/prefer-default-export */
/* eslint-disable import/named */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import ProfileScreen from '../../src/components/screens/ProfileScreen';
import websiteUserPageHOC from '../../src/components/wrappers/WebsiteUserPage/hoc';
import authService from '../../src/services/auth/authService';
import userService from '../../src/services/user/userService';

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(ctx);
    return {
      props: {
        user: {
          ...session,
          ...profilePage.user,
        },
        posts: profilePage.posts,
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login/' });
  ctx.res.end();

  return {
    props: {},
  };
}

export default websiteUserPageHOC(ProfileScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perfil',
    },
    menuProps: {
      display: false,
      logged: true,
    },
    pageBoxProps: {
      backgroundColor: '#E5E5E5',
    },
  },
});
