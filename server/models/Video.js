import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    vidUrl: String,
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      max: 200,
    },
    views: {
      type: Number,
      default: 10000,
    },
    videoType: {
      type: String,
      enum: ['video', 'short'],
    },
    private: {
      type: Boolean,
      default: false,
    },
    createdBy: mongoose.Types.ObjectId,
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

export default Video;
