/**
* EntityType.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    token:{
      type: 'string',
      unique: true,
      primaryKey: true
    },
    name:{
      type: 'string',
      unique: true
    },
    description:{
      type: 'string'
    },
    entities:{
      collection: 'Entity',
      via: 'entityType'
    }

  },
  beforeCreate: function (values, next) {
    values.token = GuidGenerator.generateGUID();
    next();
  }
};
