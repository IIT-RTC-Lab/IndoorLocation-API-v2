/**
 * Device_statusController
 *
 * @description :: Server-side logic for managing device_statuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Device_status.find()
					.exec(function(err,device_statuses){
						if(err){
							return res.json(err);

						}
						return res.json(device_statuses);
					})

	}
};

