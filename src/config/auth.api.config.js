const appConfig=require('./app.config')
const api_url=appConfig.api.url


module.exports = {
  login: `${api_url}/auth/login`,
  register: `${api_url}/auth/register`,

}