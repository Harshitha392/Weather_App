const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callback){
    try{
        var users = await userModel.find({});
        callback(null,users);
    }
    catch(err){
        callback(err,null);
    }
    
};

// module.exports.createFirstUser = async function(callback){
//     try{
//         var user = {
//             username: "ashvita201",
//             yearOfGraduation: 2033,
//         };
//         var newUser = new userModel(user);
//         var result = await newUser.save();
//         callback(null,result);
//     }
//     catch(err){
//         callback(err,null);
//     }
    
// };

// module.exports.createUser = async function(username,callback){
//     try{
//         var user = {
//             username : username,
//             yearOfGraduation : 2024,
//         };
//         var newUser = new userModel(user);
//         var result = await newUser.save();
//         callback(null,result);
//     }
//     catch(err){
//         callback(err,null);
//     }
// }

// delete
// module.exports.deleteUser = async function(callback){
//     try{
//         var query = {
//             userName: "harshitha12",
//             //userName: username,
//         }
//         var result = await userModel.deleteOne(query);
//         callback(null,result);
//     }
//     catch(err){
//         callback(err,null);
//     }
// }

//delete user by name
// module.exports.deleteUserByUserName = async function(username, callback) {
//     try {
//         var query = { username: username };
//         var deletedUser = await userModel.findOneAndDelete(query);
//         callback(null, deletedUser);
//     } catch (err) {
//         callback(err, null);
//     }
// }


//get user by name
// module.exports.getUserByUserName = async function(username, callback) {
//     try {
//         var query = { username: username };
//         var user = await userModel.find(query);
//         callback(null, user);
//     } catch (err) {
//         callback(err, null);
//     }
// }

// UPDATE

// update values by userName
// module.exports.updateUserByUserName = async function(userName, newvalues, callback) {
//     try {
//         var query = { username: username };
//         var updatedUser = await userModel.findOneAndUpdate(query, newValues, { new: true });
//         callback(null, updatedUser);
//     } catch (err) {
//         callback(err, null);
//     }
// }

// DELETE   

// delete user by userName

// module.exports.deleteUserByUserName = async function(username, callback) {
//     try {
//         var query = { username: username };
//         var deletedUser = await userModel.findOneAndDelete(query);
//         callback(null, deletedUser);
//     } catch (err) {
//         callback(err, null);
//     }
// }