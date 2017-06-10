/**
 * Experiment_event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	tev_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	tev_fk_tester_id:{
  		type:'integer',
  		required: true
  	},
  	tev_type:{
  		type:'string',
  		required: true
  	},
  	tev_last_update:{
  		type:'datetime',
  		required: true
  	},
  	tev_fk_run_id:{
  		type:'integer',
  		required: true
  	}

  }
};

