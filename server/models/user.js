var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var SALT_WORK_FACTOR = 10;


var DogSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  pet_name: {type: String, required: true},
  pet_likes: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
  pet_dislikes: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
});

// Must encrypt, salt and hash the password
DogSchema.pre('save', function(next) {
  var dog = this;

  if(!dog.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      bcrypt.hash(dog.password, salt, function(err, hash) {

        // change the password to the hash
        dog.password = hash;
        next();
      });
  });
});

// compare passwords
DogSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err ? callback(err) : callback(null, isMatch)); // null - no error, and matched true/false
  });
};

var Dog = mongoose.model('dogs', DogSchema);
module.exports = Dog;
