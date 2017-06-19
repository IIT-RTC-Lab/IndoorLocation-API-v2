/**
 * Beacon_info.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	b_id:{
  		type:'string',
  		required: true,
      primaryKey: true
  	},
  	b_major:{
  		type:'integer',
  		required: true
  	},
  	b_minor:{
  		type:'integer',
  		required: true
  	},
  	b_fk_loc_id:{
  		type:'integer',
  		required: true
  	},
  	b_fk_section_id:{
  		type:'integer',
  		required: true
  	}

  }
};

