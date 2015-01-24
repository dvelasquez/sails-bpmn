/**
* Status.js
*
* @description :: This is our Status Model. This model contains the statuses of a document can be.
 * For example: The DocumentType 'go fishing' can pass through several statuses like, Created, In progress or Finished
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
    //The name of the status. This would be self explanatory, like 'Created', 'In Progress', 'Canceled' or 'Finished'
    name:{
      type: 'string',
      unique: true,
      required: true
    },
    //A more detailed information of the Status.
    description:{
      type: 'string'
    },
    //What DocumentType this status belong
    documentType:{
      model: 'DocumentType',
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

