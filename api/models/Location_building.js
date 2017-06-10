/**
 * Location_building.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	bu_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	bu_acronym:{
  		type:'string',
  		required: true
  	},
  	bu_name:{
  		type:'string',
  		required: true
  	},
  	bu_address:{
  		type:'string',
  		required: true
      
  	},
  	bu_road_name:{
  		type:'string',
  		required: true
  	},
  	bu_road_direction:{
  		type:'string',
  		required: true
  	},
  	bu_road_type:{
  		type:'string',
  		required: true
      
  	},
  	bu_road_number:{
  		type:'integer',
  		required: true
  	}

  }
};

