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

	},
	getdeviceminor:function(req,res){
		var d_minor = req.params.d_minor;
		device_info.query('SELECT * FROM indoor_location.device_info WHERE device_info.d_minor = ?', [ 'd_minor' ] ,function(err, rawResult) {
  		if (err) { return res.serverError(err); }

  		sails.log(rawResult);
  // ...grab appropriate data...
  // (result format depends on the SQL query that was passed in, and the adapter you're using)

  // Then parse the raw result and do whatever you like with it.

  		return res.ok();

		});

	}

	
};

