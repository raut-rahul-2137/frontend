const config = {
  development: {
    apiUrl: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8282/api',
  },
  production: {
    apiUrl: import.meta.env.VITE_API_URL || 'https://api.egde-fx.com/api',
  },
};

const env = import.meta.env.MODE || 'development';
console.log('Current environment:', env);
console.log('Using API URL:', config[env as keyof typeof config].apiUrl);

export default config[env as keyof typeof config];
