const { encrypt, decrypt } = require("./EncryptionHandler");

const getSocialMedia = (req, res) => {
    res.json("All Social Media");
}

const addSocialMedia = (req, res) => {
    res.json("Add email address");
}

const deleteSocialMedia = (req, res) => {
    res.json("Remove email address");
}

const updateSocialMedia = (req, res) => {
    res.json("Update email address");
}

module.exports = { getSocialMedia, addSocialMedia, deleteSocialMedia, updateSocialMedia };