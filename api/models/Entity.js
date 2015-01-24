/**
* Entity.js
*
* @description :: This is our Entity model. Here we store the Entities who interacts with transitions.
 * This allows us to grant or deny certain actions to the users. You can create profiles here like 'Fisherman'
 * or 'Astronaut' and users like 'John Doe', 'Crazy One', etc.
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
    //The name of our entity. See examples above
    name:{
      type: 'string',
      unique: true
    },
    //What kind of entity this is. Is a Profile? An User?
    entityType:{
      model: 'EntityType',
      via: 'token'
    },
    //This link allow us get all the transitions available for this Entity
    transitions:{
      collection: 'Transition',
      via: 'entity'
    },
    //This link allow us get all the documents this entity has assigned right now.
    documents:{
      collection: 'Document',
      via: 'entity'
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

