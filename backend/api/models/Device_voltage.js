/**
 * Device_voltage.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	vo_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	vo_fk_device_id:{
  		type:'string',
  		required: true
  	},
  	vo_level:{
  		type:'float',
  		required: true
  	},
  	vo_last_check:{
  		type:'datetime',
  		required: true
  	}

  }
};

