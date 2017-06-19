/**
 * Sergent_info.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	s_id:{
  		type:'string',
  		required: true,
      primaryKey: true
  	},
  	s_major:{
  		type:'integer',
  		required: true
  	},
  	s_minor:{
  		type:'integer',
  		required: true
  	},
  	s_fk_loc_id:{
  		type:'integer',
  		required: true
  	}

  }
};


