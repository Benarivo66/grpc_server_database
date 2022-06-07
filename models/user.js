const { model, Schema } = require("mongoose");


const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isContestant: {
            type: Boolean,
            default: false,
        },
        deleted: {
            type: Boolean,
            default: false,
        },
        numOfVotes: {
            type: Number,
            default: 0,
        },
        contestantNumber: {
            type: Number,
        },
        description: {
            type: String,
            default: ''
        },
        token: {
            type: String
        }
    },
    {timestamps: true}
)

const User = model('User', userSchema);

module.exports = User;