const { encrypt, decrypt } = require("./EncryptionHandler");
const AccountModal = require( "../models/account.js");

const getEmails = async (req, res) => {
    const { userID } = req.params;
    const accountName = "email";
    const allEmails = await AccountModal.find({userID, accountName});

  res.status(200).json(allEmails)
    
}

const addEmail = async (req, res) => {
    req.body.userID = req.params.userID;
    const { userID ,accountName, userName, password } = req.body;

    try{
    const newEmail = await AccountModal.create({ userID , accountName, userName, password });
    console.log(req.params.userID);
    res.status(201).json(newEmail);
    }
    catch(error){
        console.log(error);
    }
}

const deleteEmail = (req, res) => {
    res.json("Remove email address");
}

const updateEmail = (req, res) => {
    res.json("Update email address");
}

module.exports = { getEmails, addEmail, deleteEmail, updateEmail };