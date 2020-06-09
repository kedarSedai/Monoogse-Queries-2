const express = require('express');
const router = express.Router();
const Profile = require('../model/Profile');

// //Find all the documents
// router.get('/profile', (req, res) => {
//     // const query = req.query
//     Profile
//         .find({})
//         .then(data => res.json(data))
//         .catch(err => res.json(err))
// });

// //Finding documents with _id field
// router.get('/profile', (req, res) => {
//     Profile
//         .find({}, {_id:0})
//         .then(data => res.json(data))
//         .catch(err => res.json(err))
// });

// //Find the documents with age greater than 23
// router.get('/profile', (req, res) => {
    
//     Profile
//         .find({age:{$gt:23}})
//         .then(data => res.json(data))
//         .catch(err => res.json(err))
// });

// //Find the documents with querying in parameters
// router.get('/profile', (req, res) => {
//     const query = req.query
//     Profile
//         .find({query})
//         .then(data => res.json(data))
//         .catch(err => res.json(err))
// });

router.get('/profile', (req, res) => {
    Profile
        .find({}, {$match:{firstName:'tham'}})
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

//Find documents br profile id from query in url
router.get('/profile/:id', (req, res) =>{
    const id = req.params.id;
    // res.json(id)
    Profile
        .findById(id)
        .then(data => res.json(data))
        .catch(err => res.json({ message: err }))
});

//Saving documents 
router.post('/profile', async (req, res) => {
    const profile = new Profile({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        position: req.body.position,
        team: req.body.team
    });
    try{
        const saveProfile = await profile.save();
        res.json(saveProfile)
    }
    catch(err) {
        res.json({ message: err })
    }
});

//update profile by id
router.patch('/profile/:id', async(req, res) => {
    try {
    const editProfile = await Profile.updateOne({_id: req.params.id}, {$set:{firstName: req.body.firstName, lastName:req.body.lastName}});
    res.json(editProfile)
    }
     catch(err) {
         res.json(err)
     }
});

//delete profile by id 
router.delete('/profile/:id', async(req, res) => {
    try {
    const deleteProfile = await Profile.deleteOne({_id: req.params.id});
    res.json(deleteProfile)
    }
     catch(err) {
         res.json(err)
     }
});

module.exports = router;