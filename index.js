module.exports = (mongoose) => {

  const File = (key, options) => {
    mongoose.SchemaType.call(this, key, options, 'File');
  };

  File.prototype = Object.create(mongoose.SchemaType.prototype);

  File.prototype.cast =
    ({ url, filename, mimetype, encoding, size, variants }) =>
      ({ url, filename, mimetype, encoding, size, variants });

  mongoose.Schema.Types.File = File;
};
