/**
 * Device_locationController
 *
 * @description :: Server-side logic for managing device_locations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Device_location.find()
					.exec(function(err,device_locations){
						if(err){
							return res.json(err);

						}
						return res.json(device_locations);
					})

	}
};

