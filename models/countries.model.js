module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      countries:[String]
    });

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Countries = mongoose.model("countries", schema);
  return Countries;
};