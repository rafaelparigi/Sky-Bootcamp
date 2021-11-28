/*
Connecting to a database
To connect to the database, you must create a Sequelize instance. 
This can be done by either passing the connection parameters separately to the Sequelize constructor or by passing a single connection URI:

Sequelize refers to the library itself while sequelize refers to an instance of Sequelize, which represents a connection to one database. 

Promises and async/await
Most of the methods provided by Sequelize are asynchronous and therefore return Promises. 
They are all Promises , so you can use the Promise API (for example, using then, catch, finally) out of the box.
Of course, using async and await works normally as well.
*/
const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './restaurants-seq.sqlite'
});

 module.exports={sequelize, DataTypes, Model};