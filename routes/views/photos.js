var keystone = require('keystone');

var photosIndex = function (req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	var Photo = keystone.list('Photo');

	Photo.paginate({
		page: req.query.page || 1,
		perPage: 10,
		maxPages: 10
	})
		.exec(function (err, results) {
			if (err) {
				res.end("ERROR");
			}

			locals.photos = results;
			view.render('index');

		});


	// Render the view


};


exports = module.exports = {
	index: photosIndex
}; 
