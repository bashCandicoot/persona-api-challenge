module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Personas', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    job: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ssn: {
      type: Sequelize.STRING,
      unique: true,
    },
    residence: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // current_location: {
    //   type: Sequelize.GEOMETRY('POINT'),
    //   allowNull: false,
    // },
    blood_group: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    website: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sex: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    birthdate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Personas'),
};
