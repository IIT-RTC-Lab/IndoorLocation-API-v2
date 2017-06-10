/**
 * Experiment_eventController
 *
 * @description :: Server-side logic for managing experiment_events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get:function(req,res){
		Experiment_event.find()
					.exec(function(err,experiment_events){
						if(err){
							return res.json(err);

						}
						return res.json(experiment_events);
					})

	}
};
