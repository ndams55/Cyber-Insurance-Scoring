import { customFetch } from '../../../shared/customFetch';
import { API_ROUTES } from '../../shared/ApiRoutes';

export const signIn = (email: string, password: string) => {
  return customFetch.post(API_ROUTES.SIGNIN, { email, password });
};
