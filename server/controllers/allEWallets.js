const { encrypt, decrypt } = require("./EncryptionHandler");


const getEWallets = (req, res) => {
    res.json("All emails");
}

const addEWallet = (req, res) => {
    res.json("Add email address");
}

const deleteEWallet = (req, res) => {
    res.json("Remove email address");
}

const updateEWallet = (req, res) => {
    res.json("Update email address");
}

module.exports = { getEWallets, addEWallet, deleteEWallet, updateEWallet };