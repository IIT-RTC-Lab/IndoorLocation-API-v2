/**
 * Experiment_info.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	exp_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	exp_description:{
  		type:'text',
  		required: true
  	},
  	exp_start:{
  		type:'datetime',
  		required: true
  	},
  	exp_end:{
  		type:'datetime',
  		required: true
  	}

  }
};
