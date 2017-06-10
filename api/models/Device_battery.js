/**
 * Device_battery.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	ba_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	ba_fk_device_id:{
  		type:'string',
  		required: true
  	},
  	ba_number:{
  		type:'integer',
  		required: true
  	},
  	ba_timestamp:{
  		type:'datetime',
  		required: true
  	}

  }
};

