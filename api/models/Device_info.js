/**
 * Device_info.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	d_id:{
  		type:'string',
  		required: true,
      primaryKey: true
  	},
  	d_major:{
  		type:'integer',
  		required: true
  	},
  	d_minor:{
  		type:'integer',
  		required: true
  	}

  }
};

