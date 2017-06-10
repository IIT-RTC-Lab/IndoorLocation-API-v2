/**
 * Location_info.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	loc_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	loc_fk_building_id:{
  		type:'integer',
  		required: true
  	},
  	loc_floor:{
  		type:'integer',
  		required: true
  	},
  	loc_room_type:{
  		type:'string',
  		required: true
  	},
  	loc_room_number:{
  		type:'integer',
  		required: true
  	},
  	loc_nearest_wall:{
  		type:'string',
  		required: true
  	},
  	loc_comment:{
  		type:'text',
  		required: true
  	},
  	loc_x:{
  		type:'float',
  		required: true
  	},
  	loc_y:{
  		type:'float',
  		required: true
  	},
  	loc_z:{
  		type:'float',
  		required: true
  	}


  }
};
