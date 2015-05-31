var keystone = require('keystone'),
	Types = keystone.Field.Types,
	fs = require('fs');


/**
 * User Model
 * ==========
 */

var Photo = new keystone.List('Photo', {
	autokey: {path: 'slug', from: 'title', unique: true},
	map: {name: 'title'},
	defaultSort: '-createdAt'
});

Photo.add(
	{
		title: {type: String, required: true}
	},
	'Photo Content',
	{
		image: {
			type: Types.LocalFile,
			dest: 'public/uploads/photos',
			label: 'Image'

		}

	});

Photo.schema.virtual('url').get(function () {
	return "/" + this.image.href.replace('public/', '');
});

Photo.schema.pre('remove', function (next) {
	var path = this.image.path + '/' + this.image.filename;
	console.log('path: ' + path);
	fs.unlink(path);
	next();
});

Photo.register();
