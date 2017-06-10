/**
 * Device_atmosphere.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	atm_id:{
  		type:'integer',
        primaryKey: true
  	},
  	atm_fk_device_id:{
  		type:'string',
  		required: true
  	},
  	atm_temperature:{
  		type:'float',
  		required: true
  	},
  	atm_humidity:{
  		type:'float',
  		required: true
  	},
  	atm_check_moment:{
  		type:'datetime',
  		required: true
  	}



  }
};