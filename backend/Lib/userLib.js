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
//             username: "ashvitamajety",
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

module.exports.deleteUser = async function(callback){
    try{
        var query = {
            userName: "harshitha12",
            //userName: username,
        }
        var result = await userModel.deleteOne(query);
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}
