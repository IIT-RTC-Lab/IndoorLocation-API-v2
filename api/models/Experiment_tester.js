/**
 * Experiment_tester.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	tester_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	tester_map_id:{
  		type:'integer',
  		required: true
  	},
  	tester_fk_build_acr:{
  		type:'string',
  		required: true
  	},
  	tester_floor:{
  		type:'integer',
  		required: true
      
  	},
  	tester_room_type:{
  		type:'string',
  		required: true
  	},
  	tester_room_number:{
  		type:'integer',
  		required: true
  	},
  	tester_nearest_wall:{
  		type:'string',
  		required: true
      
  	},
  	tester_comment:{
  		type:'text',
  		required: true
  	},
  	tester_x:{
  		type:'float',
  		required: true
  	},
  	tester_y:{
  		type:'float',
  		required: true
      
  	},
  	tester_z:{
  		type:'float',
  		required: true
  	}

  }
};
