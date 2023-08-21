import axios from 'axios';
const unAuthClient = axios.create({
  baseURL: 'localhost:3000',
});
const authClient = axios.create({
  baseURL: 'localhost:3000',
});

authClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('login_T');

    // if (!token) throw new Error("localStorage is empty", { statusCode: 401 });
    if (!token) {
      const error = new Error('localStorage is empty');
      error.code = 401;
      throw error;
    }

    // 토큰 있으면 헤더로 백엔드에 보내
    if (token) {
      if (config.headers) config.headers.Authorization = `Bearer ${token}`;
      return config;
    } else {
      throw new Error('Token is empty');
    }
  },
  function (error) {
    if (error.response?.status === 401 || error.code === 401) {
      window.localStorage.removeItem('login_T');
      window.localStorage.removeItem('userData');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// if response is 401, remove token and redirect to login page
authClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 401 || error.code === 401) {
      // dispatch({ type: LOGOUT });
      window.localStorage.removeItem('login_T');
      window.localStorage.removeItem('userData');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);
export { unAuthClient, authClient};
