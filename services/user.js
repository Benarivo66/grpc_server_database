import User from '../models/user';

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


module.exports = {
    getByEmail,
    create,
    getAll
}