/**
* EntityType.js
*
* @description :: In this model we can store the kind of Entity an Entity belongs.
 * For Example: 'Profile', 'User' or even 'System'.
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
    //The name of our EntityType
    name:{
      type: 'string',
      unique: true
    },
    //The description of our EntityType.
    description:{
      type: 'string'
    },
    //This link allow us to get easily all the entities using the EntityType as filter.
    entities:{
      collection: 'Entity',
      via: 'entityType'
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

