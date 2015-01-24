/**
* Entity.js
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
    entityType:{
      model: 'EntityType',
      via: 'token'
    },
    transactions:{
      collection: 'Transaction',
      via: 'entity'
    },
    documents:{
      collection: 'Document',
      via: 'entity'
    }

  },
  beforeCreate: function (values, next) {
    values.token = GuidGenerator.generateGUID();
    next();
  }
};

