import mongoose, { Schema, models } from "mongoose"

const providerSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const ProviderUser = models.User || mongoose.model("User", providerSchema)

export default ProviderUser
