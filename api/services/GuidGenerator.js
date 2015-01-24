/**
 * Created by dvelasquez on 24-01-15.
 * @description :: This service generate a GUID token-alike to save in our models and use as Primary Key
 *
 */
module.exports.generateGUID = function(){
  var uuid = require('node-uuid');
  return uuid.v4();
};
