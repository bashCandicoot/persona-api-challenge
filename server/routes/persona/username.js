const db = require('../../models/index');
const Sequelize = require('sequelize');

const op = Sequelize.Op;

module.exports = (req, res) => {
  db.sequelize.models.Personas.findAll({
    where: {
      username: {
        [op.like]: `%${req.params.username}%`,
      },
    },
  })
    .then(persona => res.status(200).json({ persona }));
};
