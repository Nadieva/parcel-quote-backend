module.exports = mongoose => {
    mongoose.set('useFindAndModify', false);
    var schema = mongoose.Schema(
      {
        weight: { type: Number, min: 0, max: 100, required: true }
      });
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Parcels = mongoose.model("parcels", schema);
    return Parcels;
  };