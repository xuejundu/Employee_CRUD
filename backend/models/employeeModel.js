const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please add the first name"],
    },
    lastname: {
      type: String,
      required: [true, "Please add the last name"],
    },
    salary: {
      type: Number,
      required: [true, "Please add the salary"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
