const baseUrl = 'http://localhost:3001'; // window.location.origin;

export const environment = {
  production: true,
  baseUrl: baseUrl,
  speakers: {url: baseUrl + '/speakers'},
  sessions: {url: baseUrl + '/sessions'}
  
};
