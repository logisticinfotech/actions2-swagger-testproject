module.exports = {


  friendlyName: 'View homepage or redirect',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',

  inputs: {
    test: {
      required: false,
      type: 'string',
      description: 'test parameter '
    },
    obj: {
      type: 'string',
      required: false,
      description: 'obj parameter here'
    }
  },

  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/homepage'
    },

    redirect: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal welcome page.'
    },

  },


  fn: async function () {
    // console.log('this.req.me test',this.req.me);
    // console.log(sails.hooks.myBasicHook.sayHi('test'));
    if (this.req.me) {
      throw {
        redirect: '/welcome'
      };
    }

    return {};

  }


};
