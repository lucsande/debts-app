const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const debtHistorySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    contact: { type: Schema.Types.ObjectId, ref: "Contact" },
    userEmail: { type: String, required: true },
    contact: { type: String, required: true },
    value: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

const DebtHistory = mongoose.model("DebtHistory", debtHistorySchema);

module.exports = DebtHistory;
