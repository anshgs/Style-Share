import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    screenName: String,
    email: {
      type: String,
    },
    upvotedPicture: [{
      type: mongoose.Types.ObjectId,
      ref: 'Resource',
    }],
    galleryPictures: [{
        type: mongoose.Types.ObjectId,
        ref: 'Resource',
    }]
  },
  { collection: 'users', timestamps: true }
);

UserSchema.pre('save', function (next) {
  if (!this.screenName) {
    this.screenName = this.get('firstName') + ' ' + this.get('lastName');
  }
  next();
});

const User = mongoose.model('User', UserSchema);

export default User;
