const Sequelize = require('sequelize');

//import the models
const { restaurantModel, menuModel, menuItemModel } = require('./model');

//connects to the database on localhost
const connection = new Sequelize('db', 'userName', 'PIN', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './database/db.sqlite'
});

/*
Instances of the models - creating the tables
Models can be defined in two equivalent ways in Sequelize:
Calling sequelize.define(modelName, attributes, options)
Extending Model and calling init(attributes, options)
After a model is defined, it is available within sequelize.models by its model name.
*/
const Restaurant = connection.define('Restaurant', restaurantModel);
const Menu = connection.define('Menu', menuModel);
const MenuItem = connection.define('MenuItem', menuItemModel);

//define the associations
/*
The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).
The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).
The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).
These three calls will cause Sequelize to automatically add foreign keys to the appropriate models (unless they are already present).

To create a One-To-One relationship, the hasOne and belongsTo associations are used together;
To create a One-To-Many relationship, the hasMany and belongsTo associations are used together;
To create a Many-To-Many relationship, two belongsToMany calls are used together.

Implementation
The main setup to achieve the goal is as follows:

Foo.hasOne(Bar);
Bar.belongsTo(Foo);
Since no option was passed, Sequelize will infer what to do from the names of the models. In this case, Sequelize knows that a fooId column must be added to Bar.

This way, calling Bar.sync() after the above will yield the following SQL (on PostgreSQL, for example):
    CREATE TABLE IF NOT EXISTS "foos" (
    );
    CREATE TABLE IF NOT EXISTS "bars" (
        "fooId" INTEGER REFERENCES "foos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
    );
*/

Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);

MenuItem.belongsTo(Menu);
Menu.hasMany(MenuItem);

module.exports = { connection, Restaurant, Menu, MenuItem };
