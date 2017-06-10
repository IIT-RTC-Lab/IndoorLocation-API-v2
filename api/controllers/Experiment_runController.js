/**
 * Experiment_runController
 *
 * @description :: Server-side logic for managing experiment_runs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Experiment_run.find()
					.exec(function(err,experiment_runs){
						if(err){
							return res.json(err);

						}
						return res.json(experiment_runs);
					})

	}
};