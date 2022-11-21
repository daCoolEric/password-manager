const express = require('express');
const router = express.Router();

// importing all accounts controllers
const getAllAccounts = require('../controllers/allAccounts');

// importing email controllers
const Emails = require('../controllers/allEmails');

// importing social media controllers
const SocialMedia = require('../controllers/allSocialMedia');

// importing ewallets controllers
const EWallets = require('../controllers/allEWallets');


// importing favorites controllers
const Favorites = require('../controllers/favorites');

// all accounts srevices
router.get("/:userID/all", getAllAccounts)

// email services
router.get("/:userID/emails", Emails.getEmails);
router.post("/:userID/emails/add-email", Emails.addEmail);
router.patch("/emails/:emailID", Emails.updateEmail);
router.delete("/emails/:emailID", Emails.deleteEmail);

// social media services
router.get("/social-media", SocialMedia.getSocialMedia);
router.post("/social-media", SocialMedia.addSocialMedia);
router.patch("/social-media/:socialmediaID", SocialMedia.updateSocialMedia);
router.delete("/social-media/:socialmediaID", SocialMedia.deleteSocialMedia);

// e-wallets services
router.get("/e-wallets", EWallets.getEWallets);
router.post("/e-wallets", EWallets.addEWallet);
router.patch("/e-wallets/:ewalletID", EWallets.updateEWallet);
router.delete("/e-wallets/:ewalletID", EWallets.deleteEWallet);


// favorite accounts services
router.get("/favorites", Favorites.getFavorites);
router.post("/favorites", Favorites.addFavorite);
router.delete("/favorites/:accountID", Favorites.deleteFavorite);








module.exports = router;