/**
 * Device_infoController
 *
 * @description :: Server-side logic for managing device_infoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Device_info.find()
					.exec(function(err,device_infoes){
						if(err){
							return res.json(err);

						}
						return res.json(device_infoes);
					})

	},
	getdevice:function(req,res){
		var d_id = req.params.d_id;
		Device_info.findOne({d_id:d_id})
				.exec(function(err,device_info){
					if(err){
						return res.json(err);
					}
					return res.json(device_info);
				})

	}
	
};

