/**
 * Experiment_datapoint.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	dp_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	dp_major:{
  		type:'integer',
  		required: true
  	},
  	dp_minor:{
  		type:'integer',
  		required: true
  	},
  	dp_rssi:{
  		type:'float',
  		required: true
      
  	},
  	dp_fk_tev_id:{
  		type:'integer',
  		required: true
  	},
  	dp_capture_time:{
  		type:'datetime',
  		required: true
  	}


  }
};
