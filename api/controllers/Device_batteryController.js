/**
 * Device_batteryController
 *
 * @description :: Server-side logic for managing device_batteries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Device_battery.find()
					.exec(function(err,device_batteries){
						if(err){
							return res.json(err);

						}
						return res.json(device_batteries);
					})

	}	
};

