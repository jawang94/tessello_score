const mongoose = require("mongoose");
require("mongoose-type-email");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: [3, "Username must be longer than 3 characters"],
      maxlength: [16, "Username cannot be more than 16 characters long"]
    },
    email: { type: String, required: true },
    password: { type: String, required: true }
    // first_name: { type: String },
    // last_name: { type: String },
    // dob: { type: Date },
    // zip_code: { type: Number },
    // city: { type: String },
    // state: { type: String },
    // street_one: { type: String },
    // street_two: { type: String },
    // phone_number: { type: Number },
    // loan_amount: { type: Number },
    // loan_duration_months: { type: Number },
    // employment_status: { type: String },
    // gross_annual_income: { type: String },
    // net_annual_income: { type: Number },
    // pay_frequency_weeks: { type: Number }
  },
  { timestamps: true }
);
var User = mongoose.model("User", UserSchema);

const ScoreSchema = new mongoose.Schema(
  {
    score: { type: Number },
    user: [UserSchema]
  },
  { timestamps: true }
);
var Score = mongoose.model("Score", ScoreSchema);

module.exports = [User, Score];
