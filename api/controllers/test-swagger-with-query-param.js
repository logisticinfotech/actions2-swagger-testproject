module.exports = {


  friendlyName: 'Test swagger with query param',

  description: '',

  inputs: {
    obj: {
      type: 'string',
      required: true,
      description: 'obj parameter here'
    },
    test: {
      required: true,
      type: 'string',
      description: 'test parameter '
    },
  },

  exits: {

  },

  fn: async function (inputs, exits) {
    exits.success({
      test: 'success =>' + inputs.test,
      obj: 'obj =>' + inputs.obj,
    })
    return;
  }
};
