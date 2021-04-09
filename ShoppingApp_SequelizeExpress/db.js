const Sequelize = require('sequelize')

const db = new Sequelize('shopdb' , 'shopper' , 'shoppass', {
    host:'localhost',
    dialect: 'mysql',
    pool: {
        min:0,
        max:5,
    }
})

/*
We are creating table in our datababse with name 'users' and 'products' and 
we have stored them in a class. 
*/

const User = db.define('users' , {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const Product = db.define('products', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    manufacturer : Sequelize.STRING,
    price:{
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }
})

db.sync() /* This sync is atomatically creating a table if not created*/
    .then(() => console.log("Database has been synced"))
    .catch(() => console.error("Error creating database"))

exports = module.exports = {
    User , Product
}