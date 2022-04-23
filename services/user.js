const User = require('../models/user');

async function getByEmail(email) {
    const user = await User.findOne({email, deleted:false});
    return user;
}
async function create(newUserData) {
    const user = new User(newUserData);
    return user.save();
}
async function getAll() {
    const users = await User.find({deleted: false });
    return users;
}
async function getOne(_id) {
    const user = await User.findById({ _id, deleted: false });
    return user;
}


module.exports = {
    getByEmail,
    create,
    getAll,
    getOne
}