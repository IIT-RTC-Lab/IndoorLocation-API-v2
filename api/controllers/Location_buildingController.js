/**
 * Location_buildingController
 *
 * @description :: Server-side logic for managing location_buildings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
	get:function(req,res){
		Location_building.find()
					.exec(function(err,location_buildings){
						if(err){
							return res.json(err);

						}
						return res.json(location_buildings);
					})

	}
};