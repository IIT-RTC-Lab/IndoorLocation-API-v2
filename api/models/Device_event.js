/**
 * Device_event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	ev_id:{
  		type:'integer',
  		required: true,
      primaryKey: true
  	},
  	ev_fk_device_id:{
  		type:'string',
  		required: true
  	},
  	ev_type:{
  		type:'string',
  		required: true
  	},
  	ev_description:{
  		type:'text',
  		required: true
  	},
  	ev_moment:{
  		type:'datetime',
  		required: true
  	}

  }
};
