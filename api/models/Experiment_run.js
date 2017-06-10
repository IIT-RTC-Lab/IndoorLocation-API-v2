/**
 * Experiment_run.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	run_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	run_fk_experiment_id:{
  		type:'integer',
  		required: true
  	},
  	run_building:{
  		type:'string',
  		required: true
  	},
  	run_start:{
  		type:'datetime',
  		required: true
      
  	},
  	run_end:{
  		type:'datetime',
  		required: true
  	},
  	run_comment:{
  		type:'text',
  		required: true
  	}

  }
};
