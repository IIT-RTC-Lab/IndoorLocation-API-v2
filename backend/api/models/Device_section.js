/**
 * Device_section.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	sec_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	sec_fk_sergent_id:{
  		type:'integer',
  		required: true
  	}


  }
};


