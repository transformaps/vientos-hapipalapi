var UserController = require('./../../controllers/api/user.js')

module.exports = function () {
  return [
    {
      method: 'POST',
      path: '/api/user/login',
      config: {
        handler: UserController.login,
        auth: {
          strategy: 'standard',
          mode: 'try'
        },
        plugins: { 'hapi-auth-cookie': {redirectTo: false}}
      }
    },
    {
      method: 'POST',
      path: '/api/user/register',
      config: {
        handler: UserController.register,
        auth: false
      }
    },
    {
      method: 'DELETE',
      path: '/api/user/logout',
      config: {
        handler: UserController.logout
      }
    }
  ]
}()
