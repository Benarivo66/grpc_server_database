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
    const users = await User.find({ deleted: false });
    return users;
}
async function getContestants(){
    const users = await User.find({ isContestant: true });
    return users;
}
async function getOne(_id) {
    const user = await User.findOne({ _id, deleted: false });
    return user;
}
async function update(_id, {...data}){
    const user = await User.findByIdAndUpdate(
        _id,
        {
            $set: {
                ...data
            }
        },
        {new: true}
    );
    return user;
}
async function getContestant(contestantNumber){
    const user = await User.findOne({contestantNumber});
    return user;
}
async function getTopRankings(){
    const users = await User.
    find({
        numOfVotes: {$gt: 0}
    }).
    sort({
        numOfVotes: -1
    }).
    limit(5);
    return users;
}


module.exports = {
    getByEmail,
    create,
    getAll,
    getOne,
    update,
    getContestants,
    getContestant,
    getTopRankings
}