import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: function() {
            return this.provider === 'email';
        },
        minLength: 8,
        maxLength: 20,
        trim: true,
        default: null        
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'shop_owner', 'delivery_boy'],
        default: 'user'
    }, 
    provider: {
        type: String,
        enum: ['email', 'google'],
        default: 'email'
    }       
}, {timestamps: true});

const User  = mongoose.model('user', userSchema);

export default User;