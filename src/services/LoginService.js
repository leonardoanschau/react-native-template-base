import Api from '../middleware/Api';

export const login = credentials => {
  return Api.post('Your endpoint here', credentials);
};

export const logout = () => {
  return Api.delete('Your endpoint here');
};
