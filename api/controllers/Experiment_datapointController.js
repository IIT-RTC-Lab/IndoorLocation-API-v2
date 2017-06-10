/**
 * Experiment_datapointController
 *
 * @description :: Server-side logic for managing experiment_datapoints
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Experiment_datapoint.find()
					.exec(function(err,experiment_datapoints){
						if(err){
							return res.json(err);

						}
						return res.json(experiment_datapoints);
					})

	}
};

