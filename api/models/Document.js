/**
* Document.js
*
* @description :: This is our Document Model. This represent a Document in the bpm which can pass through status using transactions.
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
      unique: true,
      required: true
    },
    documentType:{
      model: 'DocumentType',
      via: 'token',
      required: true
    },
    status:{
      model:'Status',
      via: 'token',
      required: true
    },
    entity:{
      model:'Entity',
      via: 'token'
    }
  },
  beforeCreate: function (values, next) {
    values.token = GuidGenerator.generateGUID();
    next();
  }
};

