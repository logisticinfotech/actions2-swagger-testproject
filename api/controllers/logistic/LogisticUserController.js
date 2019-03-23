/**
 * LogisticUserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  getUsers: async function (req, res) {

    var users = await LogisticUser.find();
    // return res.status(200).send(sails.config.routes);
    return res.status(200).send(files);

  },

  saveUser: async function (req, res) {
    var createdRecord = await LogisticUser.create(req.body).fetch();
    return res.status(200).send(createdRecord);
  },

  editUser: async function (req, res) {
    var editedRecord = await LogisticUser.update({
      id: req.param('id')
    }).set(req.body).fetch();
    return res.status(200).send(editedRecord);
  },

  deleteUser: async function (req, res) {
    var deletedRecord = await LogisticUser.destroy({
      id: req.param('id')
    }).fetch();
    return res.status(200).send(deletedRecord);
  },
};
