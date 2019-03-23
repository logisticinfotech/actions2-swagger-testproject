module.exports = {


  friendlyName: 'View Users',


  description: 'Display users.',


  inputs: {
    id: {
      type: 'number',
    },
    firstName: {
      type: 'string',
    },
    pathParam: {
      type: 'string',
    }

  },


  //   exits: {
  //     success: {
  //     }
  //   },


  fn: async function (inputs, exits) {
    console.log("test =>: ", inputs.id, inputs.firstName);


    // let result = await sails.helpers.datatable(Project, this.req.query);
    // let result = await sails.helpers.datatable.with({
    //   model: User,
    //   options: this.req.query
    // });
    // // console.log("project-data resultProjects : ", result);
    return exits.success({
      id: inputs.id,
      firstName: inputs.firstName,
      pathParam: inputs.pathParam
    });
  }


};
