module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define('Personas', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 100],
          msg: 'job must be no longer than 100 characters.',
        },
      },
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 100],
          msg: 'company must be no longer than 100 characters.',
        },
      },
    },
    ssn: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: {
          args: [9, 9],
          msg: 'ssn must be 9 characters.',
        },
      },
    },
    residence: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 100],
          msg: 'residence must be no longer than 100 characters.',
        },
      },
    },
    // current_location: {
    //   type: DataTypes.GEOMETRY('POINT'),
    //   allowNull: false,
    // },
    blood_group: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 5],
          msg: 'blood_group must be no longer than 5 characters.',
        },
      },
    },
    website: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL),
      allowNull: false,
      validate: {
        len: {
          args: [0, 5],
          msg: 'website must be no longer than 5 links.',
        },
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 50],
          msg: 'username must be no longer than 50 characters.',
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 50],
          msg: 'name must be no longer than 50 characters.',
        },
      },
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 1],
          msg: 'sex must be 1 character.',
        },
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 100],
          msg: 'address must be no longer than 100 characters.',
        },
      },
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [0, 50],
          msg: 'mail must be no longer than 50 characters.',
        },
      },
    },
    birthdate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [10, 10],
          msg: 'birthdate must be 10 characters.',
        },
      },
    },
  }, {
    underscored: true,
  });
  // Persona.associate = (models) => {
  //   console.log(models);
  //   // associations can be defined here
  // };
  return Persona;
};
