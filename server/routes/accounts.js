const express = require('express');
const router = express.Router();

// importing all accounts controllers
const getAllAccounts = require('../controllers/allAccounts');

// importing email controllers
const getEmails = require('../controllers/allEmails');
const addEmail = require('../controllers/allEmails');
const deleteEmail = require('../controllers/allEmails');
const updateEmail = require('../controllers/allEmails');


// importing social media controllers
const getSocialMedia = require('../controllers/allSocialMedia');
const addSocialMedia = require('../controllers/allSocialMedia');
const deleteSocialMedia = require('../controllers/allSocialMedia');
const updateSocialMedia = require('../controllers/allSocialMedia');

// importing ewallets controllers
const getEWallets = require('../controllers/allEWallets');
const addEWallet = require('../controllers/allEWallets');
const deleteEWallet = require('../controllers/allEWallets');
const updateEWallet = require('../controllers/allEWallets');

// importing favorites controllers
const getFavorites = require('../controllers/favorites');
const addFavorite = require('../controllers/favorites');
const deleteFavorite = require('../controllers/favorites');



// all accounts srevices
router.get("/all", getAllAccounts)

// email services
router.get("/emails", getEmails);
router.post("/emails", addEmail);
router.patch("/emails/:emailID", updateEmail);
router.delete("/emails/:emailID", deleteEmail);

// social media services
router.get("/social-media", getSocialMedia);
router.post("/social-media", addSocialMedia);
router.patch("/social-media/:socialmediaID", updateSocialMedia);
router.delete("/social-media/:socialmediaID", deleteSocialMedia);

// e-wallets services
router.get("/e-wallets", getEWallets);
router.post("/e-wallets", addEWallet);
router.patch("/e-wallets/:ewalletID", updateEWallet);
router.delete("/e-wallets/:ewalletID", deleteEWallet);


// favorite accounts services
router.get("/favorites", getFavorites);
router.post("/favorites", addFavorite);
router.delete("/favorites/:accountID", deleteFavorite);








module.exports = router;