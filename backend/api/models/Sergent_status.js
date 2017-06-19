/**
 * Sergent_status.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	st_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	st_fk_sergent_id:{
  		type:'string',
  		required: true
  	},
  	st_deploy:{
  		type:'string',
  		required: true
  	},
  	st_last_update:{
  		type:'datetime',
  		required: true,
      
  	},
  	st_version:{
  		type:'float',
  		required: true
  	},
  	st_version_latest:{
  		type:'float',
  		required: true
  	},
  	st_charge:{
  		type:'string',
  		required: true
  	},
  	st_physical:{
  		type:'string',
  		required: true,
      
  	},
  	st_bluetooth:{
  		type:'string',
  		required: true
  	},
  	st_sleep_time:{
  		type:'integer',
  		required: true
  	}

  }
};

