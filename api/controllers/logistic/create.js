module.exports = {


  friendlyName: 'Create',


  description: 'Create logistic user.',


  inputs: {
    name: {
      description: 'The name to try in this attempt, e.g. "Nirav Adatiya 123123123".',
      type: 'ref',
      required: true,
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer"
          },
          name: {
            type: "string"
          }
        }
      }
    },

    city: {
      description: 'The city to try in this attempt, e.g. "Rajkot".',
      type: 'string',
      required: true,
    },
  },


  exits: {

    success: {
      message: 'test',
      description: 'Email address confirmed and requesting user logged in.'
    },


    invalid: {
      statusCode: 409,
      //   responseType: 'badRequest',
      description: 'Name and City is required.',
      message: 'from block'
    },

  },


  fn: async function (inputs, exits) {


    var userRecord = await LogisticUser.create({
      name: inputs.name,
      city: inputs.city
    }).fetch();

    if (!userRecord) {
      //   return exits.invalid();

      // or we can write it simply
      // throw 'invalid';

      //   include output data:
      //   throw {
      //     invalid: {
      //       message: 'test'
      //     }
      //   };
      return exits.invalid({
        message: 'invalid'
      });
    }
    console.log(userRecord);

    // return exits.success(userRecord);
    return exits.success({
      message: 'User created successfully',
      data: userRecord
    });
  }
};
