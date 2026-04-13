const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hons').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Define a simple schema and model
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
})

const Users = mongoose.model('Users', userSchema);

// create a new user document
// Users.create({ name: 'Salim Bhoiii', age: 42, city: 'Kalkattaaa' }).then(() => {
//     console.log('User created');
// }).catch(err => {
//     console.error('Error creating user:', err);
// });

// read all users
// Users.find().then(users => {
//     console.log('Users:', users);
// }).catch(err => {
//     console.error('Error fetching users:', err);
// });
// Users.findOne({}).then(data => {
//     console.log('First User:', data);
// });
// Users.findById("69bb6d7ed6a2671d5f31a265").then(data => {
//     console.log('User by ID:', data);
// })

// Update a user
Users.findByIdAndUpdate("69bb6d7ed6a2671d5f31a265", { age: 43 }).then(updatedUser => {
    console.log('Updated User:', updatedUser);
})



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});