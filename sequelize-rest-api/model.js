/*
http://sequelize.org/master/manual/model-basics.html
Models are the essence of Sequelize. A model is an abstraction that represents a table in your database. 
In Sequelize, it is a class that extends Model. The model tells Sequelize several things about the entity it represents, 
such as the name of the table in the database and which columns it has (and their data types).
A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the database. 
Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable.

Models can be defined in two equivalent ways in Sequelize:
Calling sequelize.define(modelName, attributes, options)
Extending Model and calling init(attributes, options)
After a model is defined, it is available within sequelize.models by its model name.
*/

const Sequelize = require('sequelize');


const restaurantModel = {
    name: {
        type: Sequelize.STRING,

        //Guide on adding validation and/or constrainsts https://sequelize.org/master/manual/validations-and-constraints.html
        allowNull: false, 
        unique: true,
        validate: {
            isAlphanumeric: {
                msg: 'must be alphanumeric'
            }
        }
    }
};

const menuModel = {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,

        }
    }
};

const menuItemModel = {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
        }
    },
    price: {
        type: Sequelize.NUMBER,
        allowNull: false,
        validate: {
            isNumeric: true,
            isSmallerThanHundred(value) {
                if (value >= 100) 
                    throw new Error('Only prices under 100 are allowed');
            }   
        }
    },
};

module.exports = {restaurantModel, menuModel, menuItemModel};

/*
// This is the setup of our models for the examples below
const Ship = sequelize.define('ship', {
  name: DataTypes.TEXT,
  crewCapacity: DataTypes.INTEGER,
  amountOfSails: DataTypes.INTEGER
}, { timestamps: false });
const Captain = sequelize.define('captain', {
  name: DataTypes.TEXT,
  skillLevel: {
    type: DataTypes.INTEGER,
    validate: { min: 1, max: 10 }
  }
}, { timestamps: false });
Captain.hasOne(Ship);
Ship.belongsTo(Captain);
*/