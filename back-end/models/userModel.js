const mongoose = require('mongoose')
const encryptData = require('../utils/encryption')
const Schema = mongoose.Schema

const userSchema = Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    profile_photo: {
      type: String,
      required: true,
      default:
        'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
    },
  },
  { timestamps: true }
)

userSchema.methods.matchPassword = function (enteredPassword) {
  return encryptData.compareHash(enteredPassword, this.password)
}

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = encryptData.hashData(this.password)
  next()
})

const user = mongoose.model('User', userSchema)

module.exports = user
