const config = {
  development: {
    apiUrl: import.meta.env.VITE_API_URL || 'https://peripherals-programmer-jeremy-bean.trycloudflare.com/api',
  },
  production: {
    apiUrl: import.meta.env.VITE_API_URL || 'https://peripherals-programmer-jeremy-bean.trycloudflare.com/api',
  },
};

const env = import.meta.env.MODE || 'development';
console.log('Current environment:', env);
console.log('Using API URL:', config[env as keyof typeof config].apiUrl);

export default config[env as keyof typeof config];
