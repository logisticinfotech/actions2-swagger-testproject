module.exports = {


    friendlyName: 'Test job',


    description: '',


    inputs: {

    },


    exits: {

    },


    fn: async function (inputs,exits) {
      Jobs.create("demoJob", {}).save(function (err) {
        return exits.success({message:'test'});
      });
    }
  };
