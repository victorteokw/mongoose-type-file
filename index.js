module.exports = (mongoose) => {

  const File = (key, options) => {
    mongoose.SchemaType.call(this, key, options, 'File');
  };

  File.prototype = Object.create(mongoose.SchemaType.prototype);

  File.prototype.cast = function(val) {
    const {
      url,
      filename,
      mimetype,
      encoding,
      size,
      variants
    } = val;
    return { url, filename, mimetype, encoding, size, variants };
  };

  mongoose.Schema.Types.File = File;
};
