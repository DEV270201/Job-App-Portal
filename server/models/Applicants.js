const DataType = require('sequelize');
const {connection} = require('../DBConnect');

const applicantSchema = connection.define('Applicant', {
 id : {
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
 },
 name: {
   type: DataType.STRING(30),
   allowNull: false
 },
 city: {
   type: DataType.STRING(30),
   allowNull: false
 },
 majors: {
   type: DataType.STRING(30),
   allowNull: false
 },
 gender: {
    type: DataType.STRING(10),
    allowNull: false
 },
 bio: {
    type: DataType.TEXT,
    allowNull: true
 },
 resume: {
    type: DataType.TEXT,
    allowNull: false
 }
}, {
 tableName: 'Applicants',
});


module.exports = applicantSchema;