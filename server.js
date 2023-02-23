// require("dotenv").config();
// // import dotenv from "dotenv";//instead of using require
// // dotenv.config();
import {config} from "dotenv";//instead of using the above methods
config();
//const userLib=require("./backend/Lib/userLib")
// import userLib from "./backend/Lib/userLib.js";
import * as userLib from "./backend/Lib/userLib.js";
//const mongoose =require("mongoose");
import mongoose from "mongoose";
// const express = require('express');
import express, {request} from "express";
const app = express();


const port = process.env.PORT || 5010;

const options = {
	extensions:['htm','html','css','js','ico','jpg','jpeg','png','svg','pdf'],
	index:['index.html'],
}
app.use(express.static("public",options));

app.get("/", function(req, res){
	//res.send("I am Harshitha Majety");
	res.sendFile(process.cwd()+"/index.html");
});
app.get("/resume", function(req, res){
	//res.send("I am Harshitha Majety");
	res.sendFile(process.cwd()+"/resume.html");
});

app.get("/card", function(req, res){
	//res.send("I am Harshitha Majety");
	res.sendFile(process.cwd()+"/card.html");
});

app.get("/weather", function(req, res){
	//res.send("I am Harshitha Majety");
	res.sendFile(process.cwd()+"/weather.html");
});

mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
	if(err)
	console.error(err);
	else{
	console.log("db connected");
	//do not create user if atleast 1 user exist in table
	// userLib.createFirstUser(function(err,res){
	// 	if(err){
	// 	console.error(err);
	// 	}
	// 	else
	// 	console.log(res);
	// });
	app.listen(port, function(){
		console.log("Server running on http://localhost:"+port);
		console.log(`Server running on http://localhost:${port}`);
	});

        //get user by name
        // userLib.getUserByUserName("harshitha12", function(err, res) {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         console.log("User found by userName:");
        //         console.log(res);
        //     }
        // });

        //update user details by name
        // Update user by userName

        var newValues = {
            $set: {
                yearOfGraduation: 2023,
            }
        };

        // userLib.updateUserByUserName("harshtiha12", newValues, function(err, res) {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         console.log("User updated by userName:");
        //         console.log(res);
        //     }
        // });

        //delete user by userName

        // userLib.deleteUserByUserName("harshitha12", function(err, res) {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         console.log("User deleted by userName:");
        //         console.log(res);
        //     }
        // });
        // app.listen(port, function(){
        //     console.log("Server running on http://localhost:"+port);
        //     console.log(`Server running on http://localhost:${port}`);
        // });

	}
});