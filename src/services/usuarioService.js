const usuarioModel = require('../models/usuarioModel');

const addUser = (req, res) => {
  const user = usuarioModel(req.body);

  user.save()
    .then(() => res.status(201).json(user))
    .catch(err => res.status(400).json({ error: err }));
};

const getUsers = (req, res) => {
  usuarioModel.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ error: err }));
};

module.exports = {
  addUser,
  getUsers
};