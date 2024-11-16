const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../dbconnection");

class Student extends Model {}

Student.init(
    {
        stuId: {
            primaryKey: true,
            type: DataTypes.STRING,
        },
        stuname: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        stuemail: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        stupassword: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
    {
        sequelize, // Use the imported sequelize instance here
        tableName: "students",
        timestamps: true,
        paranoid: true,
    }
);

module.exports = Student;
