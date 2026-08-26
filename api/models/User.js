const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Middleware to encrypt the password before saving
UserSchema.pre("save", function (next) {
  const user = this;

  // Only encrypt the password if it has been modified or is new
  if (!user.isModified("password")) return next();

  try {
    const encryptedPassword = CryptoJS.AES.encrypt(
      user.password,
      process.env.SECRET_KEY
    ).toString();
    user.password = encryptedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model("User", UserSchema);
