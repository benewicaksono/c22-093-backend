import mongoose from "mongoose";

const connectMongo = async (dbName: string) => {
  return (
    mongoose.connect(`mongodb+srv://c22-093:c22-093@c22-093.xmze3rh.mongodb.net/${dbName}?retryWrites=true&w=majority`),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

export default connectMongo;