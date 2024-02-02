import { from } from 'env-var';

const env = from({
  BASE_URL: import.meta.env.VITE_API_URL_BASE,
});

export const envs = {
  BASE_URL: env.get('BASE_URL').required().asString(),
};
