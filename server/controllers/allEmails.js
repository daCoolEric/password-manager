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

const deleteEmail = async (req, res) => {
    const { id } = req.body
    const { userID } = req.params
  
    const allEmails = await AccountModal.findOneAndDelete({ _id: id, userID })
  
    if(!allEmails) {
      return res.status(400).json({error: 'No such email'})
    }
  
    res.status(200).json(allEmails)
  }

const updateEmail = async (req, res) => {
    const { id } = req.body
    const { userID } = req.params
  
    const updatedEmail = await AccountModal.findOneAndUpdate({_id: id, userID }, {
      ...req.body
    })
  
    if (!updatedEmail) {
      return res.status(400).json({error: 'No such email'})
    }
  
    res.status(200).json("Update was successful!!!")
  }

module.exports = { getEmails, addEmail, deleteEmail, updateEmail };