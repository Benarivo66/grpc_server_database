const { model } = require("mongoose");


const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        deleted: {
            type: Boolean,
            default: false,
        },
        token: {
            type: String
        }
    },
    {timestamps: true}
)

const User = model('User', userSchema);

export default User;