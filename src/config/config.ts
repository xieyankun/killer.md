const CONFIG = {
  API_PREFIX: '',

};

if (process.env.NODE_ENV === 'development') {
  // CONFIG.API_PREFIX = 'http://localhost:3002';
  CONFIG.API_PREFIX = 'http://zny-erp.jd.com';
}

export default CONFIG;
