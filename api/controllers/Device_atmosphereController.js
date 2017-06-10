/**
 * Device_atmosphereController
 *
 * @description :: Server-side logic for managing device_atmospheres
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


	


module.exports = {
	get:function(req,res){
		Device_atmosphere.find()
					.exec(function(err,device_atmospheres){
						if(err){
							return res.json(err);

						}
						return res.json(device_atmospheres);
					})

	}
};