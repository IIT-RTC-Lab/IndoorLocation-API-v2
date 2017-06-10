/**
 * Device_eventController
 *
 * @description :: Server-side logic for managing device_events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Device_event.find()
					.exec(function(err,device_events){
						if(err){
							return res.json(err);

						}
						return res.json(device_events);
					})

	}
};

