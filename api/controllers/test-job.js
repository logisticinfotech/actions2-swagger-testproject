module.exports = {


  friendlyName: 'Test job',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true,
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    return exits.success({
      message: 'success Id => ' + inputs.id
    });

  }
};
