/**
 * Location_infoController
 *
 * @description :: Server-side logic for managing location_infoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Location_info.find()
					.exec(function(err,location_infoes){
						if(err){
							return res.json(err);

						}
						return res.json(location_infoes);
					})

	}
};