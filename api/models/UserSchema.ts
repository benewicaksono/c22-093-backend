import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    access_token: string;
};

const User: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    access_token: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model<IUser>('User', User, 'users');