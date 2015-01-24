/**
* Transition.js
*
* @description :: Transition model, this is who make the magic happens. This model tell us which status our Document can be.
 * For Example: If our document 'Go Fishing' is in status 'Created' the next status can be 'In Progress' or 'Canceled'.
 * And also give us restrictions of who can change the status using the entity, so, if a user aren't in a Entity, he can't
 * make this transition.
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
    //The name of our transition. This would be self explanatory, like: 'Create', 'Cancel', etc.
    name:{
      type: 'string',
      unique: true
    },
    //A more extensive description of this transition.
    description:{
      type: 'string'
    },
    //To what type of DocumenType this transition applies.
    documentType:{
      model: 'DocumentType',
      via: 'token'
    },
    //The current status of the document.
    currentStatus:{
      model: 'Status',
      via: 'token'
    },
    //The next status available to our currentStatus
    finalStatus:{
      model: 'Status',
      via: 'token'
    },
    //The Entity allowed to execute this transition.
    entity:{
      model: 'Entity',
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

