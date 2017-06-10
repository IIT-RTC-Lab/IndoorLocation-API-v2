/**
 * Device_location.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	dloc_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	dloc_fk_location_id:{
  		type:'integer',
  		required: true
  	},
  	dloc_fk_device_id:{
  		type:'string',
  		required: true
  	},
  	dloc_fk_experiment_id:{
  		type:'integer',
  		required: true
  	}

  }
};
