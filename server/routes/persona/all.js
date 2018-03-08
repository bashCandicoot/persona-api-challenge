const db = require('../../models/index');

module.exports = (req, res) => {
  db.sequelize.models.Personas.findAll()
    .then(persona => res.status(200).json({ persona }));
};
