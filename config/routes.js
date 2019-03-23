/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },

  'GET  /api/v1/testapiv1': {
    action: 'api/v1/test/testapiv1',
  },

  'GET /': {
    action: 'view-homepage-or-redirect',
    swagger: {
      tag: ['customTag'],
      summary: 'View Homepage Or Redirect',
      consumes: ["application/json"],
      produces: ["application/json"],
      responses: {
        "200": {
          description: "The requested resource"
        },
      },
      security: [{
        "Authorization": []
      }]
    }
  },
  'DELETE  /api/v1/logistic-users/:id': {
    controller: 'logistic/LogisticUserController',
    action: 'deleteUser',
    swagger: {
      tag: ['logistic-user'],
      summary: 'View Homepage Or Redirect',
      consumes: ["application/json"],
      produces: ["application/json"],
      responses: {
        "200": {
          description: "The requested resource 123123132"
        },
      },
      parameters: [{
          in: "path",
          name: "id",
          required: true,
          type: "string",
          description: "test parameter "
        },
        {
          in: "query",
          name: "obj",
          required: true,
          type: "string",
          description: "obj parameter here"
        }
      ],
      security: [{
        "Authorization": []
      }]
    }
  },

  'POST /test-swagger-with-query-param/:test': {
    action: 'test-swagger-with-query-param'
  },

  'GET /test-job/:id': {
    action: 'test-job'
  },

  'POST /api/v1/logistic/create': {
    action: 'logistic/create'
  },

  'PUT /api/v1/logistic/update': {
    action: 'logistic/update'
  },

  'GET /api/v1/users/index/:pathParam': {
    action: 'users/index'
  },

  'DELETE /api/v1/users/delete': {
    action: 'users/delete'
  },
  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};
