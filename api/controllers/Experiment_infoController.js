/**
 * Experiment_infoController
 *
 * @description :: Server-side logic for managing experiment_infoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Experiment_info.find()
					.exec(function(err,experiment_infoes){
						if(err){
							return res.json(err);

						}
						return res.json(experiment_infoes);
					})

	}
};