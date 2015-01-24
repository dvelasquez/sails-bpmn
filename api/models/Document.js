/**
* Document.js
*
* @description :: This is our Document Model. This represent a Document in the bpm which can pass through status using transactions.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    //This is our GUID and PK. Also called UUID
    token:{
      type: 'string',
      unique: true,
      primaryKey: true
    },
    //The name or Identifier of the document. Can be a String like 'DOC-001'
    name:{
      type: 'string',
      unique: true,
      required: true
    },
    //The Type of this Document. You can create documents like 'go fishing' and 'do the dishes' and this relationship told what kind of document this is.
    documentType:{
      model: 'DocumentType',
      via: 'token',
      required: true
    },
    //The actual status of this document. This document can pass through many statuses and this is the RIGHT NOW of this.
    status:{
      model:'Status',
      via: 'token',
      required: true
    },
    //The Entity responsible of this document right now. This works to make Inbox of tasks.
    entity:{
      model:'Entity',
      via: 'token'
    }
  },
  /**
   * @description :: This method creates a GUID token complaint to be inserted in our model. In MongoDB this is not necessary.
   * @param values :: The values of the row inserted.
   * @param next :: Next values to be processed
   */
  beforeCreate: function (values, next) {
    values.token = GuidGenerator.generateGUID();
    next();
  }
};

