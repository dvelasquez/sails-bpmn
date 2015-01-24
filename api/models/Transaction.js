/**
* Transaction.js
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
    documentType:{
      model: 'DocumentType',
      via: 'token'
    },
    status:{
      model: 'Status',
      via: 'token'
    },
    finalStatus:{
      model: 'Status',
      via: 'token'
    },
    entity:{
      model: 'Entity',
      via: 'token'
    }

  },
  beforeCreate: function (values, next) {
    values.token = GuidGenerator.generateGUID();
    next();
  }
};

