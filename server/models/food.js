var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
    food_type: {
        type: String,
        required: true,
        unique: true
    },
    food_pic: {
      type: String,
      required: true,
    },
    safeToEat: Boolean,
    benefits: String,
    toxicity_level: String,
    harms: String
}); //end foodSchema


var Food = mongoose.model('foods', FoodSchema);
module.exports = Food;
