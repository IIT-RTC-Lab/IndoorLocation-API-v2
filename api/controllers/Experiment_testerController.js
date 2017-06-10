/**
 * Experiment_testerController
 *
 * @description :: Server-side logic for managing experiment_testers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Experiment_tester.find()
					.exec(function(err,experiment_testers){
						if(err){
							return res.json(err);

						}
						return res.json(experiment_testers);
					})

	}
};