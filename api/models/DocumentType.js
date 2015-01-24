/**
* DocumentType.js
*
* @description :: The DocumentType model represents what kind of document are created in our workflow.
 * For Example: You can have a 'Go Fishing' or 'Do the dishes'. In this way you can have many different workflows in one system.
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
    //The name of our DocumentType. Should be self explanatory, so you can quickly filter.
    name:{
      type: 'string',
      unique: true
    },
    //A more extensive explanation of this kind of DocumentType.
    description:{
      type: 'string'
    },
    //With this relationship we can get easily all the statuses this model has linked.
    status: {
      collection: 'Status',
      via: 'documentType'
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

