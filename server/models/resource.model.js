import mongoose from 'mongoose';

const ResourceSchema = mongoose.Schema(
  {
    uuid: {
        type: String,
        required: true,
    },
    url: {
      type: String,
      required: true,
    },
    author: String,
    dateSubmitted: {
      type: Date,
      default: Date.now,
    },
    submittedBy: {
      type: mongoose.Types.ObjectId,
      ref: 'users',
    },
    upvoteCount: {
      type: Number,
      default: 0,
    }
  },
  { collection: 'resources' }
);

const Resource = mongoose.model('Resource', ResourceSchema);

export default Resource;
