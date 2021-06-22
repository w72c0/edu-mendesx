/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
import isStagingEnv from '../../infra/env/isStagingEnv';
import HttpClient from '../../infra/http/HttpClient';
import authService from '../auth/authService';

const BASE_URL = isStagingEnv
// Back End de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
// Back End de PROD
  : 'https://instalura-api-git-master-omariosouto.vercel.app';
// : 'https://instalura-api.omariosouto.vercel.app';

const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClient(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return {
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts');
    }
  },
  async sendPost(data) {
    const url = `${BASE_URL}/api/posts`;
    try {
      const token = await authService().getToken();
      const response = await HttpClient(url, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      });

      if (response.data) {
        return response.data;
      }
      return undefined;
    } catch (err) {
      return undefined;
    }
  },
};

export default userService;
