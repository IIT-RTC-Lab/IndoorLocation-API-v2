/**
 * Device_voltageController
 *
 * @description :: Server-side logic for managing device_voltages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Device_voltage.find()
					.exec(function(err,device_voltages){
						if(err){
							return res.json(err);

						}
						return res.json(device_voltages);
					})

	}
};

