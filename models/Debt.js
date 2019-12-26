const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const debtSchema = new Schema(
  {
    debtHistory: { type: Schema.Types.ObjectId, ref: "DebtHistory" },
    value: { type: Number, required: true },
    description: { type: String }
  },
  {
    timestamps: true
  }
);

const Debt = mongoose.model("Debt", debtSchema);

module.exports = Debt;
