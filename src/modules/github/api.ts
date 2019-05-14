import { API_GITHUB_REQUEST_URL } from '~/modules/github/constants';

export const getProjectsData = (project) => {
  return fetch(`${API_GITHUB_REQUEST_URL.BASE}${API_GITHUB_REQUEST_URL.SEARCH}${project}`)
            .then(res => res.json());
};
